import { genSaltSync, hashSync } from 'bcryptjs'
import { IUser, User } from '../models'
import { UserStatus } from '../types/enums'

const create = async (user: IUser): Promise<User> => {
  return await User.create({
    email: user.email,
    password: passwordHasher(user.password),
    status: UserStatus.ENABLE,
  })
}

const update = async (user: User, userUpdate: IUser): Promise<User> => {
  return await user.update(userUpdate)
}

const passwordHasher = (password: string): string => {
  const salt = genSaltSync(12)
  const hashedPassword = hashSync(password, salt)
  return hashedPassword
}

const getById = async (id: number): Promise<User | null> => {
  return await User.findByPk(id, {
    attributes: {
      exclude: ['password'],
    },
  })
}

const getAll = async (): Promise<User[]> => {
  return await User.findAll({
    attributes: { exclude: ['password'] },
    where: { status: UserStatus.ENABLE },
  })
}

export const userServices = {
  getById,
  getAll,
  create,
  update,
}
