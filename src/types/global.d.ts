import {
  Calendar,
  Image,
  Journey,
  Player,
  PlayerStats,
  Prediction,
  Result,
  Team,
  TeamStats,
  Ticket,
  Transaction,
  User,
  Wallet,
} from '../models'

// global express interface
declare global {
  namespace Express {
    export interface Request {
      calendar: Calendar
      image: Image
      journey: Journey
      player: Player
      playerStats: PlayerStats
      team: Team
      teamStats: TeamStats
      user: User
      sesionUser: User
      wallet: Wallet
      transaction: Transaction
      prediction: Prediction
      ticket: Ticket
      result: Result
    }
  }
}
