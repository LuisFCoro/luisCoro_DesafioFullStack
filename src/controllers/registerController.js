const path = require('path');

module.exports = {
  renderRegister: (req, res) => {
    res.sendFile(path.join(__dirname, '../views/register.html'));
  },
  processRegister: (req, res) => {
    const { email, password } = req.body;
    // Procesa los datos del registro
    res.send(`Registro exitoso: ${email}`);
  },
};
