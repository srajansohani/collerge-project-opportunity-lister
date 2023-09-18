import express from 'express';
import bodyParser from 'body-parser'
import authRoutes from './routes/auth.js'
import eventRoutes from './routes/events.js'
import dotenv from 'dotenv';
//import routes from './routes';
const app = express();
const port = 3005;
//Middlewares
app.use(express.json());
dotenv.config();




app.listen(port,()=>{
    console.log(`listening on ${port}`);
})

app.use('/auth',authRoutes)
app.use('/event',eventRoutes);

