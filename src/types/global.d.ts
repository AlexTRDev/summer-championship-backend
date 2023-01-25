import { User } from '../models'

// global express interface
declare global {
  namespace Express {
    export interface Request {
      user: User
    }
  }
}
