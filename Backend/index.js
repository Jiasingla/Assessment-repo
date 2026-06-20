import express from 'express'
import registerroute from './routes.js'
import cors from 'cors'
const app=express()
app.use(express.json())
app.use(cors({
    origin: "https://stupendous-douhua-fcd4e3.netlify.app",
  credentials: true
}))
app.use("/api",registerroute)


export default app