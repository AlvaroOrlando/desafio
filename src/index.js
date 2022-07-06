const express = require('express');
const app = express();

//postgres
const client = require('./config/dabatasePG');
client.connect(console.log('Postgres connected'));

//mysql 
require('./database');

//enviroment variables
require('dotenv').config();
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || 'localhost';

app.use(express.json());

//routes
const categoriasRoutes = require('./routes/categoriasRoutes');
const produtosRoutes = require('./routes/produtosRoutes');
app.use('/categorias', categoriasRoutes);
app.use('/produtos', produtosRoutes);

//shedule
require('./schedule/schedule');


//server
app.listen(PORT,HOST, _ =>{
    console.log(`Server is listening ${HOST}:${PORT}`)
})

