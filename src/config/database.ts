import { DataSource } from 'typeorm'
import { migrations } from '../migrations/migration'
import dotenv from 'dotenv'
dotenv.config()
export default new DataSource({
  type: 'mysql',
  host: String(process.env.DB_HOST),
  port: Number(process.env.DB_PORT),
  username: String(process.env.DB_USER),
  password: String(process.env.DB_PASSWORD),
  database: String(process.env.DB_NAME),
  entities: [__dirname + '/../entities/*.entity.{js,ts}'],
  synchronize: true,
  logging: false,
  migrations,
})
