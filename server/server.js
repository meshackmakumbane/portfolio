import express from 'express'
import cors from 'cors'
import { configDotenv } from 'dotenv'

configDotenv()

import contactRoute from './routes/contactRoutes.js'
import { errorMiddleware } from './middleware/errorMiddleware.js'

const app = express()

const PORT = process.env.PORT || 8080

app.use(express.json())
app.use(cors({
    origin: "https://makumbaneportfolio.netlify.app/"
}));

//Health check
app.get('/health', (req, res)=>{
    res.json({
        status: "OK"
    })
})

//Routes
app.use("/api/contact", contactRoute)

//Error Middleware
app.use(errorMiddleware)


app.listen(PORT, ()=>{
    console.log("Server is running on port " + PORT)
})