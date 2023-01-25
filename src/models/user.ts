import { Column, DataType, Model, Table } from 'sequelize-typescript'
import { UserAttributes, UserCreationAttributes } from '../types/user'

import { UserStatus } from '../types/enums'

@Table
export class User extends Model<UserAttributes, UserCreationAttributes> {
  @Column({
    type: DataType.STRING(65),
    allowNull: false,
  })
  email!: string

  @Column({
    type: DataType.STRING(65),
    allowNull: false,
  })
  password!: string

  @Column({
    type: DataType.ENUM(...Object.values(UserStatus)),
    defaultValue: UserStatus.active,
    allowNull: false,
  })
  status!: UserStatus
}
