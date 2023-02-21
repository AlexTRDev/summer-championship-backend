import { Calendar, ITicket, Ticket } from '../models'
import type { IQueriesTicket } from '../types/Queries'

const create = async (data: ITicket): Promise<Ticket> => {
  return await Ticket.create(data)
}

const update = async (data: Ticket, dataUpdate: ITicket): Promise<Ticket> => {
  return await data.update(dataUpdate)
}

const getById = async (id: number): Promise<Ticket | null> => {
  return await Ticket.findByPk(id)
}

const getAll = async ({ journeyId }: IQueriesTicket): Promise<Ticket[]> => {
  const where = journeyId ? { journeyId } : undefined

  return await Ticket.findAll({
    include: {
      model: Calendar,
      where,
    },
  })
}

const remove = async (data: Ticket): Promise<boolean> => {
  try {
    await data.destroy()
    return true
  } catch (error) {
    return false
  }
}

export const ticketServices = {
  getById,
  getAll,
  create,
  update,
  remove,
}
