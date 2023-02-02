import type { Gender } from './enums'

export interface IPerson {
  dni: string
  name: string
  lastName: string
  birthday: string
  gender: Gender
}
