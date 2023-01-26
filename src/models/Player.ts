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
import { Genre } from '../types/enums'
import type { IPerson } from '../types/Person'
import { Mvp } from './Mvp'

import { PlayerStats } from './PlayerStats'
import { Team } from './Team'

export interface IPlayer extends IPerson {
  id?: number
  teamId: number
  statsId: number
}

@Table({ tableName: 'players' })
export class Player extends Model<IPerson> implements IPerson {
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
  @Default(Genre.MASCULINO)
  @Column(DataType.ENUM(...Object.values(Genre)))
  genre!: Genre

  @ForeignKey(() => Team)
  teamId!: number

  @BelongsTo(() => Team)
  team!: Team

  @HasMany(() => PlayerStats)
  stats!: PlayerStats[]

  @HasMany(() => Mvp)
  mvps!: Mvp[]
}
