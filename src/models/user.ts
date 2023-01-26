import { AllowNull, BelongsToMany, Column, DataType, Default, Model, Table, Unique } from 'sequelize-typescript'
import { UserStatus } from '../types/enums'
import { Team } from './Team'

export interface IUser {
  id?: number
  email: string
  password: string
  status: UserStatus
}

@Table({ tableName: 'users' })
export class User extends Model<IUser> implements IUser {
  @Unique
  @AllowNull(false)
  @Column(DataType.STRING(65))
  email!: string

  @AllowNull(false)
  @Column(DataType.STRING(65))
  password!: string

  @AllowNull(false)
  @Default(UserStatus.ENABLE)
  @Column(DataType.ENUM(...Object.values(UserStatus)))
  status!: UserStatus

  @BelongsToMany(() => Team, { through: 'favoritos', foreignKey: 'userId', otherKey: 'teamId', timestamps: false })
  teams!: Team[]
}
