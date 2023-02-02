import type { Optional } from 'sequelize'
import { AllowNull, BelongsTo, Column, DataType, Default, ForeignKey, Model, Table } from 'sequelize-typescript'
import { Player } from './Player'

export interface IPlayerStats {
  id?: number
  gamesPlayed: number
  goalsScored: number
  numberAsists: number
  playerId: number
}
export interface IPlayerStatsCreation extends Optional<IPlayerStats, 'id'> {}

@Table({ tableName: 'player_stats', timestamps: false })
export class PlayerStats extends Model<IPlayerStats, IPlayerStatsCreation> implements IPlayerStats {
  @AllowNull(false)
  @Default(0)
  @Column(DataType.INTEGER)
  gamesPlayed!: number

  @AllowNull(false)
  @Default(0)
  @Column(DataType.INTEGER)
  goalsScored!: number

  @AllowNull(false)
  @Default(0)
  @Column(DataType.INTEGER)
  numberAsists!: number

  @ForeignKey(() => Player)
  playerId!: number

  @BelongsTo(() => Player)
  player!: Player
}
