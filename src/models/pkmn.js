const { DataTypes } = require("sequelize");
const db = require("../db/database.js");

const Pkmn = db.define("pkmn", {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

module.exports = Pkmn;