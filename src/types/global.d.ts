import { Calendar, Image, Journey, Player, PlayerStats, Team, TeamStats, User } from '../models'

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
    }
  }
}
