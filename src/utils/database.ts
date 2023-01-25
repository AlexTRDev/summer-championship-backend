import { Sequelize } from 'sequelize-typescript'
import { config } from './config'
import { User } from '../models'

export const db = new Sequelize({
  ...config['DEV'],
  dialect: 'postgres',
  models: [User],
})
