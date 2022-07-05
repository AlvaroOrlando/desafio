const express = require('express');
const app = express();

require('./database');

//enviroment variables
require('dotenv').config();
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || 'localhost';

app.use(express.json());

//routes
const categoriasRoutes = require('./routes/categoriasRoutes');
app.use('/categorias', categoriasRoutes);


//server
app.listen(PORT,HOST, _ =>{
    console.log(`Server is listening ${HOST}:${PORT}`)
})

