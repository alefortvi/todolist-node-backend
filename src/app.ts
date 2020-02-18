import express from 'express';
import morgan from 'morgan'
import router from './routes/indexRoutes';
import path from 'path';

const app = express();


//
//setting
app.set('port', process.env.PORT || 3000);

//middlewares
app.use(morgan('dev'));
app.use(express.json());

// store files
app.use('/uploads', express.static(path.resolve('uploads')));

//Routers
app.use('/api', router);

export default app;

