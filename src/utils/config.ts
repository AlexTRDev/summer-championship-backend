import * as dotenv from 'dotenv'

import { Mode } from '../types/database'

dotenv.config({ path: './config.env' })

export const config: Mode = {
  DEV: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    logging: false,
    dialectOptions: {
      bigNumberStrings: true,
    },
  },
  PROD: {
    username: process.env.PROD_DB_USERNAME,
    password: process.env.PROD_DB_PASSWORD,
    database: process.env.PROD_DB_NAME,
    host: process.env.PROD_DB_HOSTNAME,
    port: Number(process.env.PROD_DB_PORT),
    dialectOptions: {
      bigNumberStrings: true,
    },
  },
}
