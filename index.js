import express from 'express';
import bodyParser from 'body-parser'
import authRoutes from './routes/auth.js'
//import routes from './routes';
const app = express();
const port = 3005;
//Middlewares
app.use(express.json());




app.listen(port,()=>{
    console.log(`listening on ${port}`);
})

app.use('/',authRoutes)

