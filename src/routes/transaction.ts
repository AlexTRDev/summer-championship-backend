import { Router } from 'express'
import {
  createTransaction,
  deleteTransaction,
  getAllTransactions,
  getTransactionById,
  updateTransactionById,
} from '../controllers'
import {
  createTransactionValidators,
  updateTransactionValidators,
  transactionExists,
  protectSession,
  userWalletExists,
} from '../middlewares'
import { Transaction } from '../models'

export const transactionRoutes = Router()

// rutas de acceso
transactionRoutes
  .post('/admin/bulk', async (req, res) => {
    const { transactions } = req.body
    const data = await Transaction.bulkCreate(transactions)

    res.status(200).json({
      status: 'success',
      data,
    })
  })
  .use(protectSession)
  .get('/', getAllTransactions)
  .get('/:transactionId', transactionExists, getTransactionById)
  .post('/', userWalletExists, createTransactionValidators, createTransaction)
  .patch('/:transactionId', updateTransactionValidators, transactionExists, updateTransactionById)
  .delete('/:transactionId', transactionExists, deleteTransaction)
