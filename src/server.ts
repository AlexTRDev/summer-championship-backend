import { app } from './app'
import { db } from './utils'

const startServer = async () => {
  try {
    // Authenticate and synchrony with the database
    await db.authenticate()
    await db.sync({ force: true })

    // Set server to listen
    const PORT = process.env.PORT || 8000
    app.listen(PORT, () => {
      console.log('Express app running!', PORT)
    })
  } catch (error) {
    console.log(error)
  }
}
void startServer()
