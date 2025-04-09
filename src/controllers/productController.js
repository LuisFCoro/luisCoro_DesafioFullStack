const { Product, Category } = require('../models');

module.exports = {
  list: async (req, res) => {
    const products = await Product.findAll({ include: ['category'] });
    res.render('products/list', { products });
  },

  detail: async (req, res) => {
    const product = await Product.findByPk(req.params.id, { include: ['category'] });
    res.render('products/detail', { product });
  },

  createForm: async (req, res) => {
    const categories = await Category.findAll();
    res.render('products/form', { categories });
  },

  create: async (req, res) => {
    await Product.create(req.body);
    res.redirect('/products');
  },

  editForm: async (req, res) => {
    const product = await Product.findByPk(req.params.id);
    const categories = await Category.findAll();
    res.render('products/form', { product, categories });
  },

  update: async (req, res) => {
    await Product.update(req.body, {
      where: { id: req.params.id }
    });
    res.redirect('/products');
  },

  delete: async (req, res) => {
    await Product.destroy({ where: { id: req.params.id } });
    res.redirect('/products');
  },

  search: async (req, res) => {
    const searchTerm = req.query.q;
    const results = await Product.findAll({
      where: {
        name: { [Op.like]: `%${searchTerm}%` }
      }
    });
    res.render('products/list', { products: results });
  }
};
