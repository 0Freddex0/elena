function validaredad(){
    var edad= document.getElementById('edad').value;
    if (edad < 18){
        alert('eres menor de edad');

    }else{
        alert('eres mayor de edad')
    }
}