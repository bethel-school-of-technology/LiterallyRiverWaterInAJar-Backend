/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('inventory',
   {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
     },
    name: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    price1: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
     price2: {
       type: DataTypes.INTEGER,
       allowNull: false
     },
    description1: {
      type: DataTypes.STRING,
      allowNull: false
    },
     description2: {
       type: DataTypes.STRING,
       allowNull: false
     },
    size1: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
     size2: {
       type: DataTypes.STRING(10),
       allowNull: false
     },
    numbers: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    inCart: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    isMainProduct: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
     image: {
       type: DataTypes.STRING,
       allowNull: false
     },


  }, {
    tableName: 'inventory'
  });
};
