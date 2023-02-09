import { Op } from 'sequelize'
import { IPlayerStats, IPlayerStatsCreation, Player, PlayerStats } from '../models'
import type { IQueriesPlayerStats } from '../types/Queries'

const create = async (data: IPlayerStatsCreation): Promise<PlayerStats> => {
  return await PlayerStats.create(data)
}

const update = async (data: PlayerStats, dataUpdate: IPlayerStats): Promise<PlayerStats> => {
  return await data.update(dataUpdate)
}

const getById = async (id: number): Promise<PlayerStats | null> => {
  return await PlayerStats.findByPk(id)
}

const getAll = async ({ isInclude, order: orderType = 'goalsScored' }: IQueriesPlayerStats): Promise<PlayerStats[]> => {
  const include = isInclude
    ? {
        model: Player,
      }
    : undefined

  const order: any = orderType ? [[`${orderType}`, 'desc']] : undefined
  const where = orderType
    ? {
        [orderType]: {
          [Op.gt]: 0,
        },
      }
    : undefined

  return await PlayerStats.findAll({
    include,
    order,
    where,
  })
}

const remove = async (data: PlayerStats): Promise<boolean> => {
  try {
    await data.destroy()
    return true
  } catch (error) {
    return false
  }
}

export const playerStatsServices = {
  getById,
  getAll,
  create,
  update,
  remove,
}
