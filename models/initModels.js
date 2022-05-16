//Models
const { Meal } = require('../models/meal.model');
//const { Ordes } = require('../models/order.model');
const { Restaurant } = require('../models/restaurant.model');
const { Reviwes } = require('../models/reviwes.modal');
const { User } = require('../models/user.model');

// Establish your models relations inside this function
const initModels = () => {

/*    User.hasMany(Reviwes);
    Reviwes.belongsTo(User);*/

    Restaurant.hasMany(Reviwes);
    Reviwes.belongsTo(Restaurant);

    Restaurant.hasMany(Meal);
    Meal.belongsTo(Restaurant);

};

module.exports = { initModels };
