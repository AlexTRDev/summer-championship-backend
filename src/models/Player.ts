import type { Optional } from 'sequelize'
import {
  AllowNull,
  BelongsTo,
  Column,
  DataType,
  Default,
  ForeignKey,
  HasMany,
  Model,
  Table,
  Unique,
} from 'sequelize-typescript'
import { Gender } from '../types/enums'
import type { IPerson } from '../types/Person'
import { Image } from './Image'
import { Mvp } from './Mvp'

import { PlayerStats } from './PlayerStats'
import { Team } from './Team'

export interface IPlayer extends IPerson {
  id?: number
  teamId: number
}
export interface IPlayerCreation extends Optional<IPlayer, 'id'> {}

@Table({ tableName: 'players' })
export class Player extends Model<IPlayer, IPlayerCreation> implements IPlayer {
  @AllowNull(false)
  @Unique
  @Column(DataType.STRING(10))
  dni!: string

  @AllowNull(false)
  @Column(DataType.STRING(25))
  name!: string

  @AllowNull(false)
  @Column(DataType.STRING(25))
  lastName!: string

  @AllowNull(false)
  @Column(DataType.STRING(25))
  birthday!: string

  @AllowNull(false)
  @Default(Gender.MASCULINO)
  @Column(DataType.ENUM(...Object.values(Gender)))
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
