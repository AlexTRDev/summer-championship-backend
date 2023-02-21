import type { Optional } from 'sequelize'
import { BelongsTo, Column, DataType, Default, ForeignKey, HasMany, Model, Table, Unique } from 'sequelize-typescript'
import { Gender } from '../types/enums'
import type { IPerson } from '../types/Person'
import { Image } from './Image'
import { Mvp } from './Mvp'

import { IPlayerStats, PlayerStats } from './PlayerStats'
import { Team } from './Team'

export interface IPlayer extends IPerson {
  id?: number
  teamId: number
  stats?: IPlayerStats
}
export interface IPlayerCreation extends Optional<IPlayer, 'id'> {}

@Table({ tableName: 'players' })
export class Player extends Model<IPlayer, IPlayerCreation> implements IPlayer {
  @Unique
  @Column(DataType.STRING(10))
  dni!: string

  @Column(DataType.STRING(25))
  name!: string

  @Column(DataType.STRING(25))
  lastName!: string

  @Column(DataType.STRING(25))
  birthday!: string

  @Default(Gender.MALE)
  @Column(DataType.STRING(10))
  gender!: Gender

  @ForeignKey(() => Team)
  teamId!: number

  @BelongsTo(() => Team)
  team!: Team

  @HasMany(() => PlayerStats)
  playerStats!: PlayerStats[]

  @HasMany(() => Mvp)
  mvps!: Mvp[]

  @HasMany(() => Image)
  images!: Mvp[]
}
