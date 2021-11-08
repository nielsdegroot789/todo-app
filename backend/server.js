import connectDB from './config/db.js'
import stuffRoutes from './routes/stuffRoutes.js'
import somedayCategoryRoutes from './routes/somedayCategoryRoutes.js'
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

app.use('/stuffs/', stuffRoutes)
app.use('/somedayCategory/', somedayCategoryRoutes)

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`App is running in ${process.env.NODE_ENV} mode on port ${PORT}`))
