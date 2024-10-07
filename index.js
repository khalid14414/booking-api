import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config';
import bookingRouter from './router/bookingRouter.js';

const app = express()

//connect to db
await mongoose.connect(process.env.MONGO_URI);

// use middleware 
app.use(express.json())

// use router
app.use(bookingRouter)



const PORT=8080;

app.listen(PORT,()=>console.log(`App is listening on post ${PORT}`))

