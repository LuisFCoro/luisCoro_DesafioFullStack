'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    description: DataTypes.STRING,
    image: DataTypes.STRING,
    category_id: DataTypes.INTEGER
  }, {});

  Product.associate = function(models) {
    Product.belongsTo(models.Category, {
      foreignKey: 'category_id',
      as: 'category'
    });

    Product.belongsToMany(models.Cart, {
      through: models.CartItem,
      foreignKey: 'product_id',
      otherKey: 'cart_id',
      as: 'carts'
    });
  };

  return Product;
};
