if (usuarioEncontrado && contraseñaCorrecta) {
  req.session.userLogged = usuarioEncontrado;
  res.redirect('/profile'); // o donde quieras
} else {
  res.send('Usuario o contraseña incorrectos');
}

const { User } = require('../models');

module.exports = {
  registerForm: (req, res) => res.render('users/register'),
  
  register: async (req, res) => {
    await User.create(req.body);
    res.redirect('/users/profile/' + req.body.email); // Simple redirect, ajustar con login real
  },

  profile: async (req, res) => {
    const user = await User.findByPk(req.params.id);
    res.render('users/profile', { user });
  },

  editForm: async (req, res) => {
    const user = await User.findByPk(req.params.id);
    res.render('users/edit', { user });
  },

  update: async (req, res) => {
    await User.update(req.body, { where: { id: req.params.id } });
    res.redirect('/users/profile/' + req.params.id);
  }
};
