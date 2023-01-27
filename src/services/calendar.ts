import { ICalendar, Calendar } from '../models'

const create = async (data: ICalendar): Promise<Calendar> => {
  return await Calendar.create(data)
}

const update = async (data: Calendar, dataUpdate: ICalendar): Promise<Calendar> => {
  return await data.update(dataUpdate)
}

const getById = async (id: number): Promise<Calendar | null> => {
  return await Calendar.findByPk(id)
}

const getAll = async (): Promise<Calendar[]> => {
  return await Calendar.findAll()
}

const remove = async (data: Calendar): Promise<boolean> => {
  try {
    await data.destroy()
    return true
  } catch (error) {
    return false
  }
}

export const calendarServices = {
  getById,
  getAll,
  create,
  update,
  remove,
}
