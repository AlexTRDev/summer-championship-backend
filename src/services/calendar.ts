import { Calendar, ICalendar, ICalendarCreation, Team } from '../models'
import type { IQueriesCalendar } from '../types/Queries'

const create = async (data: ICalendarCreation): Promise<Calendar> => {
  return await Calendar.create(data)
}

const bulk = async (data: ICalendarCreation[]): Promise<Calendar[]> => {
  return await Calendar.bulkCreate(data)
}

const update = async (data: Calendar, dataUpdate: ICalendar): Promise<Calendar> => {
  return await data.update(dataUpdate)
}

const getById = async (id: number): Promise<Calendar | null> => {
  return await Calendar.findByPk(id)
}

const getAll = async ({ isInclude, journeyId }: IQueriesCalendar): Promise<Calendar[]> => {
  const include: any = isInclude
    ? [
        {
          model: Team,
          as: 'homeTeam',
          attributes: {
            exclude: ['presentation', 'createdAt', 'updatedAt'],
          },
        },
        {
          model: Team,
          as: 'awayTeam',
          attributes: {
            exclude: ['presentation', 'createdAt', 'updatedAt'],
          },
        },
      ]
    : undefined

  const where = journeyId ? { journeyId } : undefined

  return await Calendar.findAll({
    include,
    where,
    order: [['number', 'ASC']],
  })
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
  bulk,
}
