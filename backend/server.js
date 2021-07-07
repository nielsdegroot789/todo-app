import connectDB from './config/db.js'
import userRoutes from './routes/userRoute.js'
import todoRoutes from './routes/todoRoutes.js'
import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

//connect database
connectDB()

//dotenv config
dotenv.config()

const app = express()
app.use(cors())

//Creating API for user
app.use('/users', userRoutes)
app.use('/todos/', todoRoutes)

const PORT = process.env.PORT || 5000

//Express js listen method to run project on http://localhost:5000
app.listen(PORT, console.log(`App is running in ${process.env.NODE_ENV} mode on port ${PORT}`))
