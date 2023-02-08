import { ITeamStats, ITeamStatsCreation, Team, TeamStats } from '../models'
import type { IQueriesTeamStats } from '../types/Queries'

const create = async (data: ITeamStatsCreation): Promise<TeamStats> => {
  return await TeamStats.create(data)
}

const update = async (data: TeamStats, dataUpdate: ITeamStats): Promise<TeamStats> => {
  return await data.update(dataUpdate)
}

const getById = async (id: number): Promise<TeamStats | null> => {
  return await TeamStats.findByPk(id)
}

const getAll = async ({ isInclude, serie }: IQueriesTeamStats): Promise<TeamStats[]> => {
  let include: any = isInclude
    ? {
        model: Team,
        attributes: {
          exclude: ['createdAt', 'updatedAt'],
        },
      }
    : undefined

  include = include && serie ? { ...include, where: { serie } } : isInclude ? include : undefined

  return await TeamStats.findAll({
    include,
    order: [
      ['points', 'DESC'],
      ['goalDifference', 'DESC'],
      ['goalsFor', 'DESC'],
      ['goalsAgainst', 'DESC'],
    ],
  })
}

const remove = async (data: TeamStats): Promise<boolean> => {
  try {
    await data.destroy()
    return true
  } catch (error) {
    return false
  }
}

export const teamStatsServices = {
  getById,
  getAll,
  create,
  update,
  remove,
}
