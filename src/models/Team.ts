import { BelongsToMany, Column, DataType, HasMany, Model, Table } from 'sequelize-typescript'

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
  presentation: boolean
}

@Table({ tableName: 'teams' })
export class Team extends Model<ITeam> {
  @Column({
    type: DataType.STRING(50),
    allowNull: false,
  })
  name!: string

  @Column({
    type: DataType.STRING(3),
    allowNull: false,
    defaultValue: SerieTeam.A,
  })
  serie!: SerieTeam

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    defaultValue: 2023,
  })
  season!: number

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  presentation!: boolean

  @HasMany(() => TeamStats)
  teamStats!: TeamStats[]

  @HasMany(() => Player)
  players!: Player[]

  @HasMany(() => Manager)
  managers!: Manager[]

  @BelongsToMany(() => User, { through: 'favoritos', foreignKey: 'teamId', otherKey: 'userId', timestamps: false })
  users!: User[]
}
