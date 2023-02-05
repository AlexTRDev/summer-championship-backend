import { Image, ITeam, Player, PlayerStats, Team } from '../models'
import { AppError, db } from '../utils'

const create = async (data: ITeam): Promise<Team | AppError> => {
  const transaction = await db.transaction()

  try {
    const team = await Team.create(data, { transaction })
    await team.$create('teamStat', { teamId: team.id }, { transaction })

    transaction.commit()

    return team
  } catch (error) {
    transaction.rollback()
    return new AppError('Error at create Team and Stats', 500)
  }
}

const update = async (data: Team, dataUpdate: ITeam): Promise<Team> => {
  return await data.update(dataUpdate)
}

const getById = async (id: number): Promise<Team | null> => {
  console.log('entra', id)

  return await Team.findOne({
    attributes: {
      exclude: ['createdAt', 'updatedAt'],
    },
    include: [
      {
        model: Player,
        attributes: {
          exclude: ['createdAt', 'updatedAt'],
        },
        required: true,
        include: [
          {
            model: Image,
            attributes: ['url', 'description'],
          },
          {
            model: PlayerStats,
          },
        ],
      },
    ],
    where: {
      id,
    },
  })
}

const getAll = async (): Promise<Team[]> => {
  return await Team.findAll({
    // include: Image,
  })
}

const remove = async (data: Team): Promise<boolean> => {
  try {
    await data.destroy()
    return true
  } catch (error) {
    return false
  }
}

export const teamServices = {
  getById,
  getAll,
  create,
  update,
  remove,
}
