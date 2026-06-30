import express from 'express'
import cors from 'cors'
import { configDotenv } from 'dotenv'

configDotenv()

import contactRouter from './routes/contactRoutes.js'
import { errorMiddleware } from './middleware/errorMiddleware.js'

const app = express()

const PORT = process.env.PORT || 8080


app.use(cors({
    origin: "https://makumbaneportfolio.netlify.app"
}));

app.use(express.json())

//Health check
app.get('/health', (req, res)=>{
    res.json({
        status: "OK"
    })
})

//Routes
app.use("/api/contact", contactRouter)

//Error Middleware
app.use(errorMiddleware)


app.listen(PORT, ()=>{
    console.log("Server is running on port " + PORT)
})