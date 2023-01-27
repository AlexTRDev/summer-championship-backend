import { ITeam, Team } from '../models'

const create = async (data: ITeam): Promise<Team> => {
  return await Team.create(data)
}

const update = async (data: Team, dataUpdate: ITeam): Promise<Team> => {
  return await data.update(dataUpdate)
}

const getById = async (id: number): Promise<Team | null> => {
  return await Team.findByPk(id)
}

const getAll = async (): Promise<Team[]> => {
  return await Team.findAll()
}

const remove = async (data: Team): Promise<boolean> => {
  try {
    console.log(data)

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
