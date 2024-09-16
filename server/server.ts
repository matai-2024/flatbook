import express from 'express'
import * as Path from 'node:path'

import flatRoutes from './routes/flats.ts'
import choreRoutes from './routes/chores.ts'
import announcementRoutes from './routes/announcements.ts'

const server = express()

server.use(express.json())

server.use('/api/v1/flats', flatRoutes)
server.use('/api/v1/chores', choreRoutes)
server.use('/api/v1/announcements', announcementRoutes)

if (process.env.NODE_ENV === 'production') {
  server.use(express.static(Path.resolve('public')))
  server.use('/assets', express.static(Path.resolve('./dist/assets')))
  server.get('*', (req, res) => {
    res.sendFile(Path.resolve('./dist/index.html'))
  })
}

export default server
