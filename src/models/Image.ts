import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript'
import { Manager } from './Manager'
import { Player } from './Player'
import { Team } from './Team'

export interface IImage {
  id?: number
  url: string
  description: string
  playerId?: number
  managerId?: number
  teamId?: number
}

@Table({ timestamps: false, tableName: 'images' })
export class Image extends Model<IImage> implements IImage {
  @Column(DataType.STRING)
  url!: string

  @Column(DataType.STRING)
  description!: string

  @ForeignKey(() => Team)
  teamId!: number

  @ForeignKey(() => Player)
  playerId!: number

  @ForeignKey(() => Manager)
  managerId!: number

  @BelongsTo(() => Team)
  team!: Team

  @BelongsTo(() => Player)
  player!: Player

  @BelongsTo(() => Manager)
  manager!: Manager
}
