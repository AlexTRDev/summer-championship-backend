import { AllowNull, BelongsTo, Column, DataType, Default, ForeignKey, Model, Table, Unique } from 'sequelize-typescript'
import { Gender } from '../types/enums'

import type { IPerson } from '../types/Person'
import { Team } from './Team'

export interface IManager extends IPerson {
  id?: number
  teamId: number
}

@Table({ tableName: 'managers' })
export class Manager extends Model<IManager> implements IManager {
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
}
