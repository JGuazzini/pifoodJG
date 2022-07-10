const { Router } = require('express');
// Importar todos los routers;


const recipesRouter = require('./recipes');
const recipeRouter = require('./recipe');




const router = Router();

// Configurar los routers
router.use('/recipes', recipesRouter);
router.use('/recipe', recipeRouter);


module.exports = router;
