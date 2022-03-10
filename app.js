import express  from 'express'
import {router as authRoutes} from './routes/auth.js' 
const app = express()
app.use('/api/auth', authRoutes)
export {app}