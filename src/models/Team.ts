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
}

@Table({ tableName: 'teams' })
export class Team extends Model<ITeam> implements ITeam {
  @Column({
    type: DataType.STRING(50),
    allowNull: false,
  })
  name!: string

  @Column({
    type: DataType.ENUM(...Object.values(SerieTeam)),
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

  @HasMany(() => TeamStats)
  stats!: TeamStats[]

  @HasMany(() => Player)
  players!: Player[]

  @HasMany(() => Manager)
  managers!: Manager[]

  @BelongsToMany(() => User, { through: 'favoritos', foreignKey: 'teamId', otherKey: 'userId', timestamps: false })
  users!: User[]
}
