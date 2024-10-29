
   
        // Variable global
        var mensaje = "Hola desde la variable global!";
        
        // Mostrar el contenido de la variable global
        alert("Variable global: " + mensaje);
        
        // Función que redefine la variable con el mismo nombre
        function mostrarVariableLocal() {
            var mensaje = "Hola desde la variable local!";
            
            // Mostrar el contenido de la variable local
            alert("Variable local dentro de la función: " + mensaje);
        }
        
        // Llamar a la función
        mostrarVariableLocal();
        
        // Volver a mostrar la variable global
        alert("Variable global después de llamar a la función: " + mensaje);
    

