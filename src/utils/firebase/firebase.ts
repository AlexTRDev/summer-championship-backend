import admin, { auth, ServiceAccount } from 'firebase-admin'
import serviceAccount from './config.json'

const app = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as ServiceAccount),
})

export const authApp = auth(app)
