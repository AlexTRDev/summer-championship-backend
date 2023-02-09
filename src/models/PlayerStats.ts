import type { Optional } from 'sequelize'
import { BelongsTo, Column, DataType, Default, ForeignKey, Model, Table } from 'sequelize-typescript'
import { Player } from './Player'

export interface IPlayerStats {
  id?: number
  gamesPlayed?: number
  goalsScored?: number
  numberAsists?: number
  yellowCards?: number
  redCards?: number
  playerId: number
}

export interface IPlayerStatsCreation extends Optional<IPlayerStats, 'id' | 'yellowCards' | 'redCards'> {}

@Table({ tableName: 'player_stats', timestamps: false })
export class PlayerStats extends Model<IPlayerStats, IPlayerStatsCreation> implements IPlayerStats {
  @Default(0)
  @Column(DataType.INTEGER)
  gamesPlayed!: number

  @Default(0)
  @Column(DataType.INTEGER)
  goalsScored!: number

  @Default(0)
  @Column(DataType.INTEGER)
  numberAsists!: number

  @Default(0)
  @Column(DataType.INTEGER)
  yellowCards!: number

  @Default(0)
  @Column(DataType.INTEGER)
  redCards!: number

  @ForeignKey(() => Player)
  playerId!: number

  @BelongsTo(() => Player)
  player!: Player
}
