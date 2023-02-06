import { Sequelize } from 'sequelize-typescript'
import { Calendar, Image, Journey, Manager, Mvp, Player, PlayerStats, Team, TeamStats, User } from '../models'
import { config } from './config'

export const db = new Sequelize({
  ...config.PROD,
  dialect: 'postgres',
  models: [Calendar, Image, Journey, Manager, Mvp, Player, PlayerStats, Team, TeamStats, User],
})
