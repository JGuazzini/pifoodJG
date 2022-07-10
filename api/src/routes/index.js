const { Router } = require('express');
// Importar todos los routers;


const recipesRouter = require('./recipes');
const typesRouter = require('./types');
const recipeRouter = require('./recipe');




const router = Router();

// Configurar los routers
router.use('/recipes', recipesRouter);
router.use('/types', typesRouter);
router.use('/recipe', recipeRouter);


module.exports = router;
