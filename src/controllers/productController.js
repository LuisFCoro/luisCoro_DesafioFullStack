const db = require('../database/models');

module.exports = {
  index: async (req, res) => {
    const products = await db.Product.findAll();
    res.render('products/index', { products });
  },

  detail: async (req, res) => {
    const product = await db.Product.findByPk(req.params.id);
    res.render('products/detail', { product });
  },

  createForm: (req, res) => {
    res.render('products/create');
  },

  store: async (req, res) => {
    await db.Product.create({
      name: req.body.name,
      price: req.body.price,
      description: req.body.description,
      // y demás campos
    });
    res.redirect('/products');
  },

  editForm: async (req, res) => {
    const product = await db.Product.findByPk(req.params.id);
    res.render('products/edit', { product });
  },

  update: async (req, res) => {
    await db.Product.update(
      {
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
      },
      { where: { id: req.params.id } }
    );
    res.redirect('/products');
  },

  destroy: async (req, res) => {
    await db.Product.destroy({ where: { id: req.params.id } });
    res.redirect('/products');
  },
};
