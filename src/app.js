import express from 'express';
import morgan from 'morgan';

import libroroutes from './routes/libro.routes';
import editorialroutes from './routes/editorial.routes';

const app=express();
var cors=require('cors');
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.get('/',function(req,res,next){
    res.send('Bienvenido a Node JS ....');
});

app.use("/libros",libroroutes);
app.use("/editorial",editorialroutes);


export default app;