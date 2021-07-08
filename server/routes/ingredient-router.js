const express = require('express')

const IngredientCtrl = require('../controllers/ingredient-ctrl')

const router = express.Router()

router.post('/ingredient', IngredientCtrl.createIngredient)
router.put('/ingredient/:id', IngredientCtrl.updateIngredient)
router.delete('/ingredient/:id', IngredientCtrl.deleteIngredient)
router.get('/ingredient/:id', IngredientCtrl.getIngredientById)
router.get('/ingredients', IngredientCtrl.getIngredients)

module.exports = router
