import { Sequelize } from 'sequelize-typescript'
import {
  Calendar,
  Image,
  Journey,
  Manager,
  Mvp,
  Player,
  PlayerStats,
  Prediction,
  Result,
  Team,
  TeamStats,
  Transaction,
  User,
  Wallet,
} from '../models'
import { Ticket } from '../models/Ticket'
import { config } from './config'

export const db = new Sequelize({
  ...config.PROD,
  dialect: 'postgres',
  models: [
    Calendar,
    Image,
    Journey,
    Manager,
    Mvp,
    Player,
    PlayerStats,
    Prediction,
    Team,
    TeamStats,
    Ticket,
    Transaction,
    User,
    Wallet,
    Result,
  ],
})
