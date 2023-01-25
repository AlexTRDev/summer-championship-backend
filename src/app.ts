import express from 'express'
import morgan from 'morgan'
import { appRoutes } from './routes'
import { globalErrorHandler } from './controllers'

// Init our Express app
export const app = express()

app.use(morgan('dev'))
app.use(express.json())
app.use('/api/v1', appRoutes)
app.use(globalErrorHandler)

// Catch non-existing endpoints
app.all('*', (req, res) => {
  res.status(404).json({
    status: 'error',
    message: `${req.method} ${req.url} does not exists in our server`,
  })
})
