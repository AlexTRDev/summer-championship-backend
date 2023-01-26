import {
  AllowNull,
  BelongsToMany,
  Column,
  DataType,
  Default,
  HasMany,
  Model,
  Table,
  Unique,
} from 'sequelize-typescript'

import { SerieTeam } from '../types/enums'
import { Manager } from './Manager'
import { Player } from './Player'
import { TeamStats } from './TeamStats'
import { User } from './User'

export interface ITeam {
  id?: number
  name: string
  serie: SerieTeam
  season: number
}

@Table({ tableName: 'teams' })
export class Team extends Model<ITeam> implements ITeam {
  @AllowNull(false)
  @Unique
  @Column(DataType.STRING(65))
  name!: string

  @Default(SerieTeam.A)
  @Column(DataType.ENUM(...Object.values(SerieTeam)))
  serie!: SerieTeam

  @Column(DataType.INTEGER)
  season!: number

  @HasMany(() => TeamStats)
  stats!: TeamStats[]

  @HasMany(() => Player)
  players!: Player[]

  @HasMany(() => Manager)
  managers!: Manager[]

  @BelongsToMany(() => User, { through: 'favoritos', foreignKey: 'teamId', otherKey: 'userId', timestamps: false })
  users!: User[]
}
