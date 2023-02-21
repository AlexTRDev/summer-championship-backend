import type { Optional } from 'sequelize'
import { AllowNull, Column, DataType, Model, Table } from 'sequelize-typescript'

export interface IResult {
  id?: number
  calendarId: number
  result: string
}
export interface IResultCreation extends Optional<IResult, 'id'> {}

@Table({ timestamps: false, tableName: 'results' })
export class Result extends Model<IResult, IResultCreation> implements IResult {
  @AllowNull(false)
  @Column(DataType.INTEGER)
  calendarId!: number

  @Column(DataType.STRING(1))
  result!: string
}
