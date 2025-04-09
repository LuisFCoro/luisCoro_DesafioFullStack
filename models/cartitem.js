'use strict';
module.exports = (sequelize, DataTypes) => {
  const CartItem = sequelize.define('CartItem', {
    cart_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER
  }, {});

  CartItem.associate = function(models) {
    // No hace falta declarar asociaciones acá si ya están en Product y Cart
  };

  return CartItem;
};
