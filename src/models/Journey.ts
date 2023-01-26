import { AllowNull, Column, DataType, HasMany, Model, Table, Unique } from 'sequelize-typescript'
import { Calendar } from './Calendar'

export interface IJourney {
  id?: number
  date: string
}

@Table({ timestamps: false, tableName: 'journeys' })
export class Journey extends Model<IJourney> implements IJourney {
  @Unique
  @AllowNull(false)
  @Column(DataType.STRING(15))
  date!: string

  @HasMany(() => Calendar)
  calendars!: Calendar[]
}
