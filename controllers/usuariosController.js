const Usuarios = require('../models/Usuarios');

exports.formCrearCuenta = (req, res) => {
    res.render('crearCuenta', {
        nombrePagina: 'Crear cuenta en TasKing'
    })
}

exports.crearCuenta = async (req, res) => {
    // Leemos los datos
    const {email, password} = req.body;

    try {
        // Creamos el usuario
        await Usuarios.create({
            email,
            password
        })
        res.redirect('/iniciar-sesion')
    } catch (error) {
        res.render('crearCuenta', {
            error: error.error,
            nombrePagina: 'Crear cuenta en TasKing'
        })
    }
}