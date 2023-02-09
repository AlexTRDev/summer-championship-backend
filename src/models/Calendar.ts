import type { Optional } from 'sequelize'
import { AllowNull, BelongsTo, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript'
import { Journey } from './Journey'
import { Mvp } from './Mvp'
import { Team } from './Team'

export interface ICalendar {
  id?: number
  number: number
  homeScore: number
  awayScore: number
  homeTeamId: number
  awayTeamId?: number
  journeyId: number
  mvpId?: number
}
export interface ICalendarCreation extends Optional<ICalendar, 'id'> {}

export interface CalendarResponse {
  createdAt?: string
  updatedAt?: string
}

@Table({ timestamps: false, tableName: 'calendars' })
export class Calendar extends Model<ICalendar, ICalendarCreation> implements ICalendar {
  @AllowNull(false)
  @Column(DataType.INTEGER)
  number!: number

  @Column({
    type: DataType.INTEGER,
    defaultValue: 0,
  })
  homeScore!: number

  @Column({
    type: DataType.INTEGER,
    defaultValue: 0,
  })
  awayScore!: number

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

  @BelongsTo(() => Team, { as: 'homeTeam', foreignKey: 'homeTeamId' })
  homeTeam!: Team

  @BelongsTo(() => Team, { as: 'awayTeam', foreignKey: 'awayTeamId' })
  awayTeam!: Team

  @BelongsTo(() => Journey)
  journey!: Journey

  @BelongsTo(() => Mvp)
  mvp!: Mvp
}
