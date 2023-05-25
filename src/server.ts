import express from 'express'
import { sequelize } from './database'
import { adminJs, adminJsRouter } from './adminjs'

const app = express()

app.use(express.static('public'))

app.use(adminJs.options.rootPath, adminJsRouter)

const PORT = process.env.PORT || 3000

app.listen(PORT, async () => {
  await sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.')
  })

  console.log(`Server started successfully at port ${PORT}`)
})