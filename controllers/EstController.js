const Estudiante = require('../models/Estudiante');
function create(req, res){

    /*
        req => todos los parámetros que recibimos
        res => respuesta a devolver
    */

    var estudiante  = new Estudiante();
    var params = req.body;

    estudiante.firstName = params.firstName;
    estudiante.lastName = params.lastName;
    estudiante.edad = params.edad;
    estudiante.correo = params.correo;
    estudiante.direccion = params.direccion;
    estudiante.telefono = params.telefono;

    estudiante.save( (error, estudianteCreate)=>{

        if(error){
            res.status(500).send({
                statusCode: 500,
                message: "Error en el servidor"
            })
        }else{

            if(!estudianteCreate){
                res.status(400).send({
                    statusCode: 400,
                    message: "Error al insertar al estudiante"
                })
            }else{
                res.status(200).send({
                    statusCode: 200,
                    message: "Estudiante Almacenado correctamente",
                    dataEst: estudianteCreate
                })
            }
        }

   } );

}
function update(req, res){

    var parameters = req.body;
    var idEst = req.params.idEst;

    Estudiante.findByIdAndUpdate( idEst, parameters, (error, estudianteUpdated)=>{

        if(error){
            res.status(500).send({
            statusCode: 500,
            message: ("Error en el servidor")
            })
        }else{
            if(!estudianteUpdated){    
                res.status(400).send({
                    statusCode: 400,
                    message: ("Error al actualizar")
                    }) 
            }else{
                res.status(200).send({
                    statusCode: 200,
                    message: ("Se modificó al estudiante")
                    
                    })
            }

        }


    })



}

function remove(req, res){

    var idEst = req.params.idEst;
    Estudiante.findByIdAndDelete( idEst, (error, estudianteRemoved)=>{
        if(error){
            res.status(500).send({
                statusCode: 500,
                message:"Error en el servidor"


            })
        }else{

            if(!estudianteRemoved){ 
                res.status(400).send({
                    statusCode: 400,
                    message:"No se eliminó al Estudiante"    
    
                })
            }else{
                res.status(200).send({
                    statusCode: 200,
                    message:"Estudiante eliminado correctamente"    
    
                })
            }


        }



    } )
}


function listarEstudiantes(req, res){

    Estudiante.find({}, (error, allEstudiantes)=>{

        if(error){
            res.status(500).send({
                statusCode: 500,
                message:"Error en el servidor"


            })
        }else{           
                res.status(200).send({
                    statusCode: 200,
                    message:"Estudiantes listados correctamente",    
                    allEstudiantes: allEstudiantes
                })
            


        }


    } )


}

module.exports = {

    create,
    update,
    remove,
    listarEstudiantes
}