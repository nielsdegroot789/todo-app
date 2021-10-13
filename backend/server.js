import connectDB from './config/db.js'
import userRoutes from './routes/userRoute.js'
import todoRoutes from './routes/todoRoutes.js'
import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

/* TODO: converter is probably redundant, check it out  */
// import converter from './helpers/converter.js'

// connect database
connectDB()

// dotenv config
dotenv.config()

const app = express()

// parse json http bodies into javascript objects so req.body is accessible
app.use(express.json())

// enable cors
app.use(cors())

app.use('/users', userRoutes)
app.use('/todos/', todoRoutes)
const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`App is running in ${process.env.NODE_ENV} mode on port ${PORT}`))
