export interface UserAttributes {
  id?: number
  email: string
  password: string
  status: UserStatus
}

export interface UserCreationAttributes extends Omit<UserAttributes, 'id'> {}

export interface UserResponse extends Omit<UserAttributes, 'password'> {
  createdAt?: string
  updatedAt?: string
}
