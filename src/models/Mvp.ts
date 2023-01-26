import { AllowNull, BelongsTo, Column, ForeignKey, Model, Table } from 'sequelize-typescript'
import { Player } from './Player'

export interface IMVP {
  id?: number
  gameMVP: boolean
  dayMVP: boolean
  playerId: number
}
@Table({ tableName: 'mvps', timestamps: false })
export class Mvp extends Model<IMVP> implements IMVP {
  @AllowNull(false)
  @Column
  gameMVP!: boolean

  @AllowNull(false)
  @Column
  dayMVP!: boolean

  @ForeignKey(() => Player)
  playerId!: number

  @BelongsTo(() => Player)
  player!: Player
}
