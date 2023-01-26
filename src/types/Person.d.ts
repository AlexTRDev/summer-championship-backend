import type { Genre } from './enums'

export interface IPerson {
  dni: string
  name: string
  lastName: string
  birthday: string
  genre: Genre
}
