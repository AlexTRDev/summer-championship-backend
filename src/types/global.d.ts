import { Calendar, Journey, Team, User } from '../models'

// global express interface
declare global {
  namespace Express {
    export interface Request {
      user: User
      team: Team
      journey: Journey
      calendar: Calendar
    }
  }
}
