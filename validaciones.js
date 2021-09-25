/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function validar_nombreUsuario(string){
    let nombreUsuario = string;
    let expresionValidacion = /^[A-Za-z0-9-].{2,8}$/; /*/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{4,9}$/*/
    if (expresionValidacion.test(nombreUsuario)){
        /*alert('se cumple los requerimientos')*/
        return true;
    }else{
        /*alert('no se cumple con los requerimientos')*/
        return false;
    }
    
}

function validar_contrasena(string){
    let contrasena = string;
    let expresionValidacion = /^[A-Za-z0-9-].{5,}$/; /*/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6}$/ */
    if (expresionValidacion.test(contrasena)){
        /*alert('se cumple los requerimientos')*/
        return true;
    }else{
        /*alert('no se cumple con los requerimientos')*/
        return false;
    }
}

module.exports.validar_nombreUsuario = validar_nombreUsuario;
module.exports.validar_contrasena = validar_contrasena;
