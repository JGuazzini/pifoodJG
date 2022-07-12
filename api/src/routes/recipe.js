const { Router } = require('express');
const { Recipe, Diet } = require('../db')



const router = Router();

router.post('/', async (req, res) => {
    try {
        const { name, summary, healthScore, steps, dietTypes } = req.body
        const newRecipe = await Recipe.create({
            name,
            summary,
            healthScore,
            steps,
        })

        let dietTypesRecipeDb = await Diet.findAll({
            where: {name: dietTypes}
        })
        newRecipe.addDiet(dietTypesRecipeDb)

        res.status(200).send(newRecipe)  
        
    } catch (error) {

        res.status(400).send('invalid input');
    };
});



module.exports = router;