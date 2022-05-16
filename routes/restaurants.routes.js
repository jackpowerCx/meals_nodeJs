const express = require('express');

// Middlewares
const { restaurantExists } = require('../middlewares/restaurants.middlewares')
const { protectToken } = require('../middlewares/users.middlewares');
//controller
const {
    createRestaurants,
    getAllRestaurants,
    updateRestaurant,
    deleteRestaurant,
    getRestaurantsById,
} = require('../controllers/restaurants.controller');

const router = express.Router();

router.get('/',getAllRestaurants);
router.get('/:id',restaurantExists, getRestaurantsById);

router.use(protectToken);

router
    .route('/')
    .post(createRestaurants);
    

router
    .route('/:id')
    .patch(restaurantExists, updateRestaurant)
    .delete(restaurantExists, deleteRestaurant);

module.exports = { restaurantsRouter: router };