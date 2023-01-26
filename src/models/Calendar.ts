import { BelongsTo, Column, ForeignKey, Model, Table } from 'sequelize-typescript'
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
  @Column
  homeGoals!: number

  @Column
  awayGoals!: number

  @ForeignKey(() => Team)
  @Column
  homeTeamId!: number

  @ForeignKey(() => Team)
  @Column
  awayTeamId!: number

  @ForeignKey(() => Journey)
  @Column
  journeyId!: number

  @ForeignKey(() => Mvp)
  @Column
  mvpId!: number

  @BelongsTo(() => Team)
  team!: Team

  @BelongsTo(() => Journey)
  journey!: Journey

  @BelongsTo(() => Mvp)
  mvp!: Mvp
}
