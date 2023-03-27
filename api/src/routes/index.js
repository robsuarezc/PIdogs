const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Importar controladores
const dogsController = require('../controllers/dogsController');
const temperamentsController = require('../controllers/temperamentsController');

// Rutas
router.get('/dogs', dogsController.getDogs);
router.get('/dogs/:idRaza', dogsController.getDogById);
router.get('/dogs/name', dogsController.getDogByName);
router.post('/dogs', dogsController.createDog);
router.get('/temperaments', temperamentsController.getTemperaments);

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
