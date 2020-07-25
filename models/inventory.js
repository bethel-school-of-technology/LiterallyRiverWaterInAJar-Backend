/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('inventory', {
  name: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    size: {
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
    }


  }, {
    tableName: 'inventory'
  });
};
