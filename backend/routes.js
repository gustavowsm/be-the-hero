const express = require('express');

const Ongcontroller = require('./src/controllers/Ongcontroller');

const connection = require('./src/database/connection');

const incidentcontroller = require('./src/controllers/incidentcontroller');

const profilecontroller = require('./src/controllers/profilecontroller');

const SessionController = require('./src/controllers/SessionController');
 
const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/ongs', Ongcontroller.index);
routes.post('/ongs', Ongcontroller.create);

routes.get('/profile', profilecontroller.index);

routes.get('/incidents', incidentcontroller.index);
routes.post('/incidents', incidentcontroller.create);
routes.delete('/incidents/:id', incidentcontroller.delete);
module.exports = routes;
