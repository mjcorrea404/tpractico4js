const persona = {
    nombre: 'Patricia',
    apellido: 'Bazan',
    edad: 33,
    esEstudiante: true,
    hobbies: ['Leer', 'Hacer crossfit', 'Ver películas'],
    
    presentar: function() {
      console.log(`Hola, soy ${this.nombre} ${this.apellido}, tengo ${this.edad} años.`);
      if (this.esEstudiante) {
        console.log('Soy estudiante.');
      } else {
        console.log('No soy estudiante.');
      }
      console.log('Mis hobbies son:');
      this.hobbies.forEach(hobby => console.log(hobby));
    },
    
    agregarHobby: function(hobby) {
      this.hobbies.push(hobby);
    },
    
    borrarHobby: function(hobby) {
      const index = this.hobbies.indexOf(hobby);
      if (index !== -1) {
        this.hobbies.splice(index, 1);
      }
    },
    
    buscarHobby: function(hobby) {
      return this.hobbies.includes(hobby);
    }
  };
  
  
  persona.presentar();
  persona.agregarHobby('Bailar'); 
  persona.borrarHobby('Jugar fútbol'); 
  console.log(persona.buscarHobby('Leer')); 
  