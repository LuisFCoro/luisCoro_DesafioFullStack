'use strict';
module.exports = (sequelize, DataTypes) => {
  const Cart = sequelize.define('Cart', {
    user_id: DataTypes.INTEGER,
    total_price: DataTypes.DECIMAL
  }, {});

  Cart.associate = function(models) {
    Cart.belongsTo(models.User, {
      foreignKey: 'user_id',
      as: 'user'
    });

    Cart.belongsToMany(models.Product, {
      through: models.CartItem,
      foreignKey: 'cart_id',
      otherKey: 'product_id',
      as: 'products'
    });
  };

  return Cart;
};
