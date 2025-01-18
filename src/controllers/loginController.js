const path = require('path');

module.exports = {
  renderLogin: (req, res) => {
    res.sendFile(path.join(__dirname, '../views/login.html'));
  },
  processLogin: (req, res) => {
    const { email, password } = req.body;
    // Procesa los datos del login
    res.send(`Login exitoso: ${email}`);
  },
};
