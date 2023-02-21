import { IWallet, Wallet } from '../models'

const create = async (data: IWallet, userId: number): Promise<Wallet> => {
  return await Wallet.create({ ...data, userId })
}

const createAdmin = async (data: IWallet): Promise<Wallet> => {
  return await Wallet.create({ ...data })
}

const update = async (data: Wallet, dataUpdate: IWallet): Promise<Wallet> => {
  return await data.update(dataUpdate)
}

const getById = async (id: number): Promise<Wallet | null> => {
  return await Wallet.findByPk(id)
}

const getByUser = async (userId: number): Promise<Wallet | null> => {
  return await Wallet.findOne({
    where: {
      userId,
    },
  })
}

const getAll = async (): Promise<Wallet[]> => {
  return await Wallet.findAll()
}

const remove = async (data: Wallet): Promise<boolean> => {
  try {
    await data.destroy()
    return true
  } catch (error) {
    return false
  }
}

export const walletServices = {
  getById,
  getByUser,
  getAll,
  create,
  createAdmin,
  update,
  remove,
}
