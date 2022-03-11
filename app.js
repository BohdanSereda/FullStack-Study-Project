import express  from 'express'
import cors from 'cors'
import morgan from 'morgan'
import {router as authRoutes} from './routes/auth.js' 
import {router as analyticsRoutes} from './routes/analytics.js' 
import {router as categoryRoutes} from './routes/category.js' 
import {router as orderRoutes} from './routes/order.js' 
import {router as positionRoutes} from './routes/position.js' 

const app = express()

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cors())

app.use('/api/auth', authRoutes)
app.use('/api/analytics', analyticsRoutes)
app.use('/api/category', categoryRoutes)
app.use('/api/order', orderRoutes)
app.use('/api/position', positionRoutes)

export {app}