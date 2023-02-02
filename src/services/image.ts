import { IImage, Image } from '../models'

const create = async (data: IImage): Promise<Image> => {
  return await Image.create(data)
}

const update = async (data: Image, dataUpdate: IImage): Promise<Image> => {
  return await data.update(dataUpdate)
}

const getById = async (id: number): Promise<Image | null> => {
  return await Image.findByPk(id)
}

const getAll = async (): Promise<IImage[]> => {
  return await Image.findAll()
}

const remove = async (data: Image): Promise<boolean> => {
  try {
    await data.destroy()
    return true
  } catch (error) {
    return false
  }
}

export const imageServices = {
  getById,
  getAll,
  create,
  update,
  remove,
}
