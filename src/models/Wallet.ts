import type { Optional } from 'sequelize'
import { BelongsTo, Column, DataType, Default, ForeignKey, Model, Table } from 'sequelize-typescript'
import { Status } from '../types/enums'
import { User } from './User'

export interface IWallet {
  id?: number
  balance: number
  status: string
  userId: number
}

export interface IWalletUpdate extends Optional<IWallet, 'id' | 'balance' | 'status' | 'userId'> {}

@Table({ tableName: 'wallets' })
export class Wallet extends Model<IWallet, IWalletUpdate> implements IWallet {
  @Default(0)
  @Column(DataType.DECIMAL(7, 2))
  balance!: number

  @Default(Status.ENABLE)
  @Column(DataType.STRING(10))
  status!: Status

  @ForeignKey(() => User)
  @Column({
    unique: true,
    allowNull: false,
  })
  userId!: number

  @BelongsTo(() => User, { foreignKey: 'userId' })
  user!: User
}
