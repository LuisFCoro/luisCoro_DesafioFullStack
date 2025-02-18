const bcrypt = require('bcrypt');
const fs = require('fs');
const path = require('path');

// Ruta al archivo JSON de usuarios
const usersFilePath = path.join(__dirname, '../data/users.json');

// Función para leer usuarios desde el archivo JSON
const readUsers = () => {
    if (!fs.existsSync(usersFilePath)) {
        // Si el archivo no existe, devolver un array vacío
        return [];
    }
    const data = fs.readFileSync(usersFilePath, 'utf-8');
    return JSON.parse(data);
};

// Función para escribir usuarios en el archivo JSON
const writeUsers = (users) => {
    fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2), 'utf-8');
};

// Controlador para manejar el registro de usuarios
exports.register = (req, res) => {
    const { name, email, password } = req.body;

    // Mostrar los datos del registro en la terminal
    console.log('Datos del registro:', JSON.stringify(req.body, null, 2));

    // Leer usuarios desde el archivo JSON
    const users = readUsers();

    // Verificar si el usuario ya existe
    const userExists = users.some(u => u.email === email);
    if (userExists) {
        return res.status(400).send('El usuario ya existe');
    }

    // Cifrar la contraseña
    const hashedPassword = bcrypt.hashSync(password, 10);

    // Crear un nuevo usuario
    const newUser = {
        id: Date.now(), // Usamos la fecha actual como ID único
        name: name || '', // Si no se proporciona un nombre, se guarda como cadena vacía
        email: email || '',
        password: hashedPassword
    };

    // Guardar el usuario en el archivo JSON
    users.push(newUser);
    writeUsers(users);

    // Mostrar el nuevo usuario en la terminal
    console.log('Nuevo usuario registrado:', JSON.stringify(newUser, null, 2));

    // Redirigir al perfil (o a donde desees)
    res.redirect('/perfil');
};






// Controlador para manejar el login de usuarios
exports.login = (req, res) => {
    const { email, password } = req.body;

    // Validar que los campos estén presentes
    if (!email || !password) {
        return res.status(400).send('Correo y contraseña son obligatorios');
    }

    // Leer usuarios desde el archivo JSON
    const users = readUsers();

    // Buscar al usuario por correo
    const user = users.find(u => u.email === email);

    if (!user) {
        return res.status(400).send('Correo o contraseña incorrectos');
    }

    // Comparar contraseñas
    if (bcrypt.compareSync(password, user.password)) {
        // Guardar el usuario en la sesión
        req.session.user = user;
        res.redirect('/perfil'); // Redirigir al perfil o a la página principal
    } else {
        res.status(400).send('Correo o contraseña incorrectos');
    }
};