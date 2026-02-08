import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import connectDB from './conflg/mongodb.js'
import connectCloudinary from './conflg/cloudinary.js'
import userRouter from './route/userRoute.js'
import productRouter from './route/productRoute.js'

//App Config
const app = express()
const port = process.env.PORT || 4000
connectDB()
connectCloudinary()

//middlewares
app.use(express.json())
app.use(cors())

// api endpoints
app.use('/api/user',userRouter)
app.use('/api/product',productRouter)

app.get('/', (req, res) => {
    res.send("API Working")
})

app.listen(port, () => console.log('Server started on PORT : ' + port))