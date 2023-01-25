export type dialectOptions = {
  bigNumberStrings: boolean
}

export interface ConfigDB {
  username?: string
  password?: string
  database?: string
  host?: string
  port?: number
  logging?: boolean
  dialectOptions?: dialectOptions
}

export type Mode = {
  DEV: ConfigDB
  PROD: ConfigDB
}
