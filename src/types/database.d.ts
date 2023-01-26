export interface dialectOptions {
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

export interface Mode {
  DEV: ConfigDB
  PROD: ConfigDB
}
