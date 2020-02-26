import express from 'express';
import morgan from 'morgan'
import router from './routes/indexRoutes';
import path from 'path';
import cors from 'cors';

const app = express();


//
//setting
app.set('port', process.env.PORT || 4000);

//middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

// store files
app.use('/uploads', express.static(path.resolve('uploads')));

//Routers
app.use('/api', router);

export default app;

