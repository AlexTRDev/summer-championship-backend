import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript'
import { Journey } from './Journey'
import { Mvp } from './Mvp'
import { Team } from './Team'

export interface ICalendar {
  id?: number
  homeGoals: number
  awayGoals: number
  homeTeamId: number
  awayTeamId: number
  journeyId: number
  mvpId: number
}

export interface CalendarResponse {
  createdAt?: string
  updatedAt?: string
}

@Table({ timestamps: false, tableName: 'calendars' })
export class Calendar extends Model<ICalendar> implements ICalendar {
  @Column({
    type: DataType.INTEGER,
    defaultValue: 0,
  })
  homeGoals!: number

  @Column({
    type: DataType.INTEGER,
    defaultValue: 0,
  })
  awayGoals!: number

  @ForeignKey(() => Team)
  @Column(DataType.INTEGER)
  homeTeamId!: number

  @ForeignKey(() => Team)
  @Column(DataType.INTEGER)
  awayTeamId!: number

  @ForeignKey(() => Journey)
  @Column(DataType.INTEGER)
  journeyId!: number

  @ForeignKey(() => Mvp)
  @Column(DataType.INTEGER)
  mvpId!: number

  @BelongsTo(() => Team)
  team!: Team

  @BelongsTo(() => Journey)
  journey!: Journey

  @BelongsTo(() => Mvp)
  mvp!: Mvp
}
