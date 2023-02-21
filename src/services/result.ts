import { IResult, Result } from '../models'

const create = async (data: IResult): Promise<Result> => {
  return await Result.create(data)
}

const update = async (data: Result, dataUpdate: IResult): Promise<Result> => {
  return await data.update(dataUpdate)
}

const getById = async (calendarId: number): Promise<Result | null> => {
  return await Result.findOne({
    where: {
      calendarId,
    },
  })
}

const getAll = async (): Promise<Result[]> => {
  return await Result.findAll()
}

const remove = async (data: Result): Promise<boolean> => {
  try {
    await data.destroy()
    return true
  } catch (error) {
    return false
  }
}

const bulkAdmin = async (data: IResult[]): Promise<Result[]> => {
  return await Result.bulkCreate(data)
}

export const resultServices = {
  getById,
  getAll,
  create,
  update,
  remove,
  bulkAdmin,
}
