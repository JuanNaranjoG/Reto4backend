const express = require('express');
/* const cors = require('cors'); */
const app = express();
const morgan = require('morgan');

//settings
app.set('port',4000);


//middlewares
/* app.use(cors());
app.use(express.json()); */
app.use(morgan('dev'));


//routes
app.use('/api/menu', require('./routes/menu'));
app.use('/api/nosotros', require('./routes/nosotros'));
app.use('/api/personal', require('./routes/personal'));
app.use('/api/reservas', require('./routes/reservas'));
app.use('/api/servicios', require('./routes/servicios'));
app.use('/api/solicitudes', require('./routes/solicitudes'));
app.use('/api/comentarios', require('./routes/comentarios'));
/* app.use('/api/coccion', require('./routes/coccion'));
app.use('/api/personaexterna', require('./routes/personaexterna')); */


module.exports = app;