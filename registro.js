/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

let registros = [];

function agregarRegistro(){
    var usuario = document.getElementById('in_usuario').value;
    var contrasena = document.getElementById('in_contrasena').value;
    
    var informacionUsuario = {usuario,contrasena};
    registros.push(informacionUsuario);
    console.log(registros);
    /*alert(registros);*/
}

function filtrarPorContrasena(arreglo, filtro){
    RegistrosConstraseñas =[];
    for (let i=0; i<arreglo.length; i++){
        if(arreglo[i].contrasena.length <= filtro){
            RegistrosConstraseñas.push(arreglo[i]);
        }else{
        }
    }
    console.log(RegistrosConstraseñas);
    return RegistrosConstraseñas;
}

module.exports.registros = registros;
module.exports.filtrarPorContrasena = filtrarPorContrasena;
module.exports.agregarRegistro = agregarRegistro;

