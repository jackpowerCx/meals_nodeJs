const { DataTypes } = require('sequelize');
const { db } = require('../utils/database');

const Reviwes = db.define('reviwes', {
	id: {
		primaryKey: true,
		autoIncrement: true,
		allowNull: false,
		type: DataTypes.INTEGER,
	},
    userId:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    comment:{
		type: DataTypes.STRING,
		allowNull: false,
    },
    restaurantId:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    rating: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
});


module.exports = { Reviwes };