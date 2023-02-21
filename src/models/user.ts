import type { Optional } from 'sequelize'
import {
  AllowNull,
  BelongsToMany,
  Column,
  DataType,
  Default,
  HasMany,
  HasOne,
  Model,
  Table,
  Unique,
} from 'sequelize-typescript'
import { Status, UserRole } from '../types/enums'
import { Team } from './Team'
import { Ticket } from './Ticket'
import { Transaction } from './Transaction'
import { Wallet } from './Wallet'

export interface IUser {
  id?: number
  name?: string
  email?: string
  password?: string
  status: Status
  photo?: string
  role: UserRole
}

interface IUserUpdate extends Optional<IUser, 'id'> {}

@Table({ tableName: 'users' })
export class User extends Model<IUser, IUserUpdate> implements IUser {
  @Column(DataType.STRING(65))
  name!: string

  @Column(DataType.STRING)
  photo!: string

  @Unique
  @Column(DataType.STRING(65))
  email!: string

  @Column(DataType.STRING(65))
  password!: string

  @AllowNull(false)
  @Default(Status.ENABLE)
  @Column(DataType.STRING(10))
  status!: Status

  @AllowNull(false)
  @Default(UserRole.CLIENT)
  @Column(DataType.STRING(10))
  role!: UserRole

  @BelongsToMany(() => Team, { through: 'favoritos', foreignKey: 'userId', otherKey: 'teamId', timestamps: false })
  teams!: Team[]

  @HasMany(() => Transaction)
  transactions!: Transaction[]

  @HasMany(() => Ticket)
  tickets!: Ticket[]

  @HasOne(() => Wallet, { foreignKey: 'userId' })
  wallet!: Wallet

  async createWallet(): Promise<Wallet> {
    const wallet = await Wallet.create({ userId: this.id })
    this.wallet = wallet
    return wallet
  }
}
