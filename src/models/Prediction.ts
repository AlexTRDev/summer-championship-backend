import type { Optional } from 'sequelize'
import { Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript'
import { Result } from '../types/enums'
import { Calendar } from './Calendar'
import { Ticket } from './Ticket'

export interface IPrediction {
  ticketId?: number
  calendarId: number
  result: string
}

export interface IPredictionUpdate extends Optional<IPrediction, 'ticketId'> {}

@Table({ tableName: 'predictions' })
export class Prediction extends Model<IPrediction, IPredictionUpdate> implements IPrediction {
  @ForeignKey(() => Ticket)
  @Column
  ticketId!: number

  @ForeignKey(() => Calendar)
  @Column
  calendarId!: number

  @Column(DataType.STRING(1))
  result!: Result
}
