import { Router } from 'express'
import { createTicket, deleteTicket, getAllTickets, getTicketById, updateTicketById } from '../controllers'
import { createTicketValidators, updateTicketValidators, ticketExists } from '../middlewares'
import { Ticket } from '../models'

export const ticketRoutes = Router()

// rutas de acceso
ticketRoutes
  .post('/admin/bulk', async (req, res) => {
    const { tickets } = req.body
    const data = await Ticket.bulkCreate(tickets)

    res.status(200).json({
      status: 'success',
      data,
    })
  })
  .get('/', getAllTickets)
  .get('/:ticketId', ticketExists, getTicketById)
  .post('/', createTicketValidators, createTicket)
  .patch('/:ticketId', updateTicketValidators, ticketExists, updateTicketById)
  .delete('/:ticketId', ticketExists, deleteTicket)
