import { Router } from 'express'
import {
  createWallet,
  createWalletAdmin,
  deleteWallet,
  getAllWallets,
  getWalletById,
  getWalletByUser,
  updateWalletById,
} from '../controllers'
import {
  createWalletValidators,
  protectSession,
  updateWalletValidators,
  userWalletExists,
  walletExists,
} from '../middlewares'
import { Wallet } from '../models'

export const walletRoutes = Router()

// rutas de acceso
walletRoutes
  .post('/admin', createWalletValidators, createWalletAdmin)
  .post('/admin/bulk', async (req, res) => {
    const { wallets } = req.body
    const data = await Wallet.bulkCreate(wallets)

    res.status(200).json({
      status: 'success',
      data,
    })
  })
  .use(protectSession)
  .post('/', createWalletValidators, createWallet)
  .get('/admin/:walletId', walletExists, getWalletById)
  .get('/user', userWalletExists, getWalletByUser)
  .patch('/:walletId', updateWalletValidators, walletExists, updateWalletById)
  .delete('/:walletId', walletExists, deleteWallet) //falta proteger para admin
  .get('/', getAllWallets) //falta proteger para admin
