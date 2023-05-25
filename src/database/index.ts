import { Sequelize } from 'sequelize'

export const sequelize = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'onebitflix',
  password: 'onebitflix',
  database: 'onebitflix_development',
  define: {
    underscored: true,
  }
})