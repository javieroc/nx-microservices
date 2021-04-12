import 'reflect-metadata'
import { createConnection } from 'typeorm'
import { Category, Product, User } from '../models'

export const setupDB = async () => {
  await createConnection({
    type: "postgres",
    host: process.env.DB_HOST,
    port: 5432,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [Category, User, Product],
    synchronize: true,
  });
}
