import { IPrediction, ITicket, ITransaction, Prediction, Ticket, Transaction, Wallet } from '../models'
import { AppError, db } from '../utils'

const create = async (data: IPrediction): Promise<Prediction> => {
  return await Prediction.create(data)
}

const update = async (data: Prediction, dataUpdate: IPrediction): Promise<Prediction> => {
  return await data.update(dataUpdate)
}

const getById = async (calendarId: number, ticketId: number): Promise<Prediction | null> => {
  return await Prediction.findOne({
    where: {
      calendarId,
      ticketId,
    },
  })
}

const getAll = async (): Promise<Prediction[]> => {
  return await Prediction.findAll()
}

const remove = async (data: Prediction): Promise<boolean> => {
  try {
    await data.destroy()
    return true
  } catch (error) {
    return false
  }
}

const bulk = async (data: IPrediction[], ticket: ITicket, userId: number, wallet: Wallet): Promise<Prediction[]> => {
  const transaction = await db.transaction()

  const balance = wallet.getDataValue('balance')
  const amount = ticket.pro ? ticket.price + 5 : ticket.price

  if (amount > balance) {
    throw new AppError('Insufficient funds', 400)
  }
  const description = `Compra de la polla del campeonato de verano!!`
  const transac: ITransaction = { amount, description, userId }

  try {
    const newTicket = await Ticket.create({ ...ticket, userId }, { transaction })

    const predictions: IPrediction[] = data.map((prediction) => {
      return {
        ...prediction,
        ticketId: newTicket.id,
      }
    })
    const newPredictions = await Prediction.bulkCreate(predictions, { transaction })

    await Transaction.create(transac, { transaction })
    await wallet.update({ balance: balance - amount }, { transaction })

    await transaction.commit()
    return newPredictions
  } catch (error) {
    await transaction.rollback()
    throw new AppError('Error at create Prediction', 500)
  }
}

const bulkWallet = async (data: IPrediction[], ticket: ITicket): Promise<Prediction[]> => {
  const transaction = await db.transaction()

  try {
    const newTicket = await Ticket.create({ ...ticket, userId: ticket.userId }, { transaction })

    const predictions: IPrediction[] = data.map((prediction) => {
      return {
        ...prediction,
        ticketId: newTicket.id,
      }
    })
    const newPredictions = await Prediction.bulkCreate(predictions, { transaction })

    await transaction.commit()
    return newPredictions
  } catch (error) {
    await transaction.rollback()
    throw new AppError('Error at create Prediction', 500)
  }
}

const bulkAdmin = async (data: IPrediction[]): Promise<Prediction[]> => {
  return await Prediction.bulkCreate(data)
}

const createPredictionResults = async (data: IPrediction[]): Promise<Prediction[]> => {
  const transaction = await db.transaction()

  try {
    const newTicket = await Ticket.create({ price: 0, pro: false, userId: 4 }, { transaction })

    const predictions: IPrediction[] = data.map((prediction) => {
      return {
        ...prediction,
        ticketId: newTicket.id,
      }
    })
    const newPredictions = await Prediction.bulkCreate(predictions, { transaction })

    await transaction.commit()
    return newPredictions
  } catch (error) {
    await transaction.rollback()
    throw new AppError('Error at create Prediction', 500)
  }
}

export const predictionServices = {
  getById,
  getAll,
  create,
  update,
  remove,
  bulk,
  createPredictionResults,
  bulkAdmin,
  bulkWallet,
}
