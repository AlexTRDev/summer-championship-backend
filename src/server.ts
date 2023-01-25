import { app } from './app'
import { db } from './utils'
import { initRelations } from './models'

// Utils

const startServer = async () => {
  try {
    await db.authenticate()
    // Establish the relations between models
    void initRelations()
    await db.sync({ force: true })
    // Set server to listen
    const PORT = 8000
    app.listen(PORT, () => {
      console.log('Express app running!', PORT)
    })
  } catch (error) {
    console.log(error)
  }
}
void startServer()
