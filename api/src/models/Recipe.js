const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
  
  sequelize.define('Recipe', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    summary: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    healthScore: {
      type: DataTypes.INTEGER 
    },
    dishtypes: {
      type: DataTypes.STRING,
    },
    steps: {
      type: DataTypes.STRING
    },
    createdInBd: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
  },
  
  });
};
