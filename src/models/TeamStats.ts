import { AllowNull, BelongsTo, Column, DataType, Default, ForeignKey, Model, Table } from 'sequelize-typescript'
import { Team } from './Team'

export interface ITeamStats {
  id?: number
  gamesPlayed: number
  macthesWon: number
  matchesLost: number
  matchesTied: number
  goalsFor: number
  goalsAgainst: number
  yellowCards: number
  redCards: number
  points: number
  teamId: number
}

@Table({ tableName: 'team_stats', timestamps: false })
export class TeamStats extends Model<ITeamStats> implements ITeamStats {
  @AllowNull(false)
  @Default(0)
  @Column(DataType.INTEGER)
  gamesPlayed!: number

  @AllowNull(false)
  @Default(0)
  @Column(DataType.INTEGER)
  macthesWon!: number

  @AllowNull(false)
  @Default(0)
  @Column(DataType.INTEGER)
  matchesLost!: number

  @AllowNull(false)
  @Default(0)
  @Column(DataType.INTEGER)
  matchesTied!: number

  @AllowNull(false)
  @Default(0)
  @Column(DataType.INTEGER)
  goalsFor!: number

  @AllowNull(false)
  @Default(0)
  @Column(DataType.INTEGER)
  goalsAgainst!: number

  @AllowNull(false)
  @Default(0)
  @Column(DataType.INTEGER)
  yellowCards!: number

  @AllowNull(false)
  @Default(0)
  @Column(DataType.INTEGER)
  redCards!: number

  @AllowNull(false)
  @Default(0)
  @Column(DataType.INTEGER)
  points!: number

  @ForeignKey(() => Team)
  teamId!: number

  @BelongsTo(() => Team)
  team!: Team
}
