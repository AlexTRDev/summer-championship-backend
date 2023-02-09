import { Image, IPlayer, Player, PlayerStats } from '../models'
import { AppError, db } from '../utils'

const create = async (data: IPlayer): Promise<Player | AppError> => {
  const transaction = await db.transaction()

  try {
    const player = await Player.create(data, { transaction })
    await player.$create('stat', { playerId: player.id }, { transaction })

    transaction.commit()

    return player
  } catch (error) {
    transaction.rollback()
    return new AppError('Error at create Player and Stats', 500)
  }
}

const update = async (data: Player, dataUpdate: IPlayer): Promise<Player> => {
  return await data.update(dataUpdate)
}

const getById = async (id: number): Promise<Player | null> => {
  return await Player.findOne({
    include: [PlayerStats, Image],
    where: {
      id,
    },
  })
}

const getAll = async (): Promise<Player[]> => {
  return await Player.findAll({
    include: [PlayerStats],
  })
}

const remove = async (data: Player): Promise<boolean> => {
  try {
    await data.destroy()
    return true
  } catch (error) {
    return false
  }
}

const bulkCreate = async (data: IPlayer[]): Promise<Player[]> => {
  const players = await Player.bulkCreate(data)

  console.log('players', data)

  for (let i = 0; i < players.length; i++) {
    await PlayerStats.create({
      playerId: players[i].id,
      goalsScored: data[i].stats?.goalsScored,
    })
  }

  return players
}

export const playerServices = {
  getById,
  getAll,
  create,
  update,
  remove,
  bulkCreate,
}
