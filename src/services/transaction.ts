import { ITransaction, Transaction, Wallet } from '../models'
import { AppError, db } from '../utils'

const create = async (data: ITransaction, userId: number, wallet: Wallet): Promise<Transaction> => {
  const balance = wallet.getDataValue('balance')
  const amount = data.amount

  if (amount > balance) {
    throw new AppError('Insufficient funds', 400)
  }

  const transaction = await db.transaction()

  try {
    const cashout = await Transaction.create({ ...data, userId }, { transaction })
    await wallet.update({ balance: balance - amount }, { transaction })
    await transaction.commit()

    return cashout
  } catch (error) {
    await transaction.rollback()
    throw new AppError('Error at create Transaction', 500)
  }
}

const update = async (data: Transaction, dataUpdate: ITransaction): Promise<Transaction> => {
  return await data.update(dataUpdate)
}

const getById = async (id: number): Promise<Transaction | null> => {
  return await Transaction.findByPk(id)
}

const getAll = async (): Promise<Transaction[]> => {
  return await Transaction.findAll()
}

const remove = async (data: Transaction): Promise<boolean> => {
  try {
    await data.destroy()
    return true
  } catch (error) {
    return false
  }
}

export const transactionServices = {
  getById,
  getAll,
  create,
  update,
  remove,
}
