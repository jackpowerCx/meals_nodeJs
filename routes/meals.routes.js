const express = require('express');

// Middlewares
const { mealExists } = require('../middlewares/meals.middlewares');

// Controller
const {

    createMeals,
    getAllMeals,
    getMealById,
    deleteMeal,
    updateMeal,

} = require('../controllers/meals.controller');


const router = express.Router();

router.post('/',createMeals);
router.get('/',getAllMeals);

router.get('/:id',mealExists, getMealById);
router.patch('/:id', mealExists, updateMeal);
router.delete('/:id',mealExists,deleteMeal);

module.exports = { mealsRouter: router };