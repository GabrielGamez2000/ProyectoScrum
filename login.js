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
}

function validar_captcha(rcaptcha){
    if(rcaptcha===5){
        return true;
    }else{
        return false;
    }
}

function iniciar_sesion(usuario,contrasena,rcaptcha){
  let incluyeUsuario;
  let incluyeContrasena = registros.includes(contrasena);
  let respuestaCaptcha = validar_captcha(rcaptcha);
  
  for (let i=0; i<registros.length; i++){
      if(registros[i].usuario.includes(usuario)===true){
          incluyeUsuario=true;
          break;
      }else{
          incluyeUsuario=false;
      }
  }
  
  for (let j=0; j<registros.length; j++){
      if(registros[j].contrasena.includes(contrasena)===true){
          incluyeContrasena=true;
          break;
      }else{
          incluyeContrasena=false;
      }
  }
  /*console.log(registros);
  console.log(usuario + contrasena + rcaptcha);
  console.log(incluyeUsuario);
  console.log(incluyeContrasena);
  console.log(respuestaCaptcha);*/
  
  if (incluyeUsuario === true && incluyeContrasena === true && respuestaCaptcha === true){
      return true;
  }else{
      return false;
  }
}

module.exports.registros = registros;
module.exports.agregarRegistro = agregarRegistro;
module.exports.validar_captcha = validar_captcha;
module.exports.iniciar_sesion = iniciar_sesion;