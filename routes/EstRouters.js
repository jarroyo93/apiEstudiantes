const express = require('express');
const EstController=require('../controllers/EstController');

const api = express.Router(); //crear las diferentes rutas para acceder con unos verbor o metodos

/*
POST: Guardar información  enviar datos sensibles por ejemplo
una contraseña

GET: Obetenet los datos, por ejemplo, listar usuarios.

PUT: Modificar información

DELETE: Eliminar información

*/


// api.get( '/saludar', (req, res)=>{

//     console.log('Llegó a la ruta saludar');

// });

api.post('/', EstController.create);
api.put('/:idEst', EstController.update);
api.delete('/:idEst', EstController.remove);
api.get('/allEst', EstController.listarEstudiantes);
module.exports = api;