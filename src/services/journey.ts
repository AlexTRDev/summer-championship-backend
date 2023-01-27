import { IJourney, Journey } from '../models'

const create = async (data: IJourney): Promise<Journey> => {
  return await Journey.create(data)
}

const update = async (data: Journey, dataUpdate: IJourney): Promise<Journey> => {
  return await data.update(dataUpdate)
}

const getById = async (id: number): Promise<Journey | null> => {
  return await Journey.findByPk(id)
}

const getAll = async (): Promise<Journey[]> => {
  return await Journey.findAll()
}

const remove = async (data: Journey): Promise<boolean> => {
  try {
    await data.destroy()
    return true
  } catch (error) {
    return false
  }
}

export const journeyServices = {
  getById,
  getAll,
  create,
  update,
  remove,
}
