import type { UserRecord } from 'firebase-admin/lib/auth/user-record'
import { IUser, User } from '../models'
import { UserRole, Status } from '../types/enums'

const update = async (user: User, userUpdate: IUser): Promise<User> => {
  return await user.update(userUpdate)
}

const getById = async (id: number): Promise<User | null> => {
  return await User.findByPk(id, {
    attributes: {
      exclude: ['password'],
    },
  })
}

const getOne = async (id: number, _query: string): Promise<User | null> => {
  return await User.findOne({
    where: {
      id,
      // ...query
    },
    attributes: {
      exclude: ['password'],
    },
  })
}

const getAll = async (): Promise<User[]> => {
  return await User.findAll({
    attributes: { exclude: ['password'] },
    where: { status: Status.ENABLE },
  })
}

const getByEmail = async (email: string): Promise<User | null> => {
  return await User.findOne({
    where: { email, status: Status.ENABLE },
  })
}

const signUp = async (userRecord: UserRecord): Promise<User> => {
  const admin = process.env.USER_ADMIN

  const [user, created] = await User.findOrCreate({
    where: {
      email: userRecord.email,
    },
    defaults: {
      role: userRecord.email === admin ? UserRole.ADMIN : UserRole.CLIENT,
      name: userRecord.displayName,
      email: userRecord.email,
      password: userRecord.passwordHash,
      photo: userRecord.photoURL,
      status: Status.ENABLE,
    },
  })

  if (created) await user.createWallet()

  return user
}

export const userServices = {
  getById,
  getByEmail,
  getAll,
  update,
  signUp,
  getOne,
}
