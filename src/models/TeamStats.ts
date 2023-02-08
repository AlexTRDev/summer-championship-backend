import type { Optional } from 'sequelize'
import { BelongsTo, Column, DataType, Default, ForeignKey, Model, Table } from 'sequelize-typescript'
import { Team } from './Team'

export interface ITeamStats {
  id?: number
  gamesPlayed: number
  macthesWon: number
  matchesLost: number
  matchesTied: number
  goalsFor: number
  goalsAgainst: number
  goalDifference: number
  yellowCards: number
  redCards: number
  points: number
  teamId: number
}
export interface ITeamStatsCreation extends Optional<ITeamStats, 'id'> {}

@Table({
  tableName: 'team_stats',
  timestamps: false,
})
export class TeamStats extends Model<ITeamStats, ITeamStatsCreation> implements ITeamStats {
  @Default(0)
  @Column(DataType.INTEGER)
  gamesPlayed!: number

  @Default(0)
  @Column(DataType.INTEGER)
  macthesWon!: number

  @Default(0)
  @Column(DataType.INTEGER)
  matchesLost!: number

  @Default(0)
  @Column(DataType.INTEGER)
  matchesTied!: number

  @Default(0)
  @Column(DataType.INTEGER)
  goalsFor!: number

  @Default(0)
  @Column(DataType.INTEGER)
  goalsAgainst!: number

  @Default(0)
  @Column({
    type: DataType.INTEGER,
  })
  goalDifference!: number

  @Default(0)
  @Column(DataType.INTEGER)
  yellowCards!: number

  @Default(0)
  @Column(DataType.INTEGER)
  redCards!: number

  @Default(0)
  @Column(DataType.INTEGER)
  points!: number

  @ForeignKey(() => Team)
  teamId!: number

  @BelongsTo(() => Team)
  team!: Team
}
