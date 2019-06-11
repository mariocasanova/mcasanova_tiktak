function validar()
	{
       // var nombre=document.forms.formulario.nombre;
        var nombre = document.getElementById('nombre').value;
        var apellidos = document.getElementById('apellidos').value;
        var edad = document.getElementById('edad').value;
        
        var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
        
        
         if(nombre == null || nombre.length == 0 || /^\s+$/.test(nombre)){
             return false;
         }else{
             alert('Nom correcte');
         }
        
         if(apellidos == null || apellidos.length == 0 ||   /^\s+$/.test(apellidos)){
            return false;
         }else{
             alert('Cognoms correctes');
         }

         if(edad == null || edad.length == 0 || isNaN(edad)){
           return false;
         }else{
             alert('Edat correcta');
         }
	}