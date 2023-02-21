import type { Optional } from 'sequelize'
import { AllowNull, BelongsTo, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript'
import { User } from './User'

export interface ITransaction {
  id?: number
  amount: number
  description: string
  userId: number
}

export interface ITransactionUpdate extends Optional<ITransaction, 'id'> {}

@Table({ tableName: 'transactions' })
export class Transaction extends Model<ITransaction, ITransactionUpdate> implements ITransaction {
  @AllowNull(false)
  @Column(DataType.DECIMAL(7, 2))
  amount!: number

  @AllowNull(false)
  @Column(DataType.STRING)
  description!: string

  @ForeignKey(() => User)
  userId!: number

  @BelongsTo(() => User)
  user!: User
}
