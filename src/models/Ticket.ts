import type { Optional } from 'sequelize'
import { BelongsTo, BelongsToMany, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript'
import { Calendar } from './Calendar'
import { Prediction } from './Prediction'
import { User } from './User'

export interface ITicket {
  id?: number
  price: number
  pro: boolean
  userId: number
}

export interface ITicketUpdate extends Optional<ITicket, 'id'> {}

@Table({ tableName: 'tickets' })
export class Ticket extends Model<ITicket, ITicketUpdate> implements ITicket {
  @Column(DataType.DECIMAL(7, 2))
  price!: number

  @Column(DataType.BOOLEAN)
  pro!: boolean

  @ForeignKey(() => User)
  userId!: number

  @BelongsTo(() => User)
  user!: Calendar

  @BelongsToMany(() => Calendar, () => Prediction)
  calendars!: Calendar[]
}
