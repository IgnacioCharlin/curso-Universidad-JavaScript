const personas = [
    new Persona('Ignacio','Charlin'),
    new Persona('Raul' , 'Perez')
];
let mostrarPersonas = () =>{
    let texto="";
    for(let persona of personas){
        texto += `<li>${persona.nombre} ${persona.apellido}</li>`; 
    }
    document.getElementById('personas').innerHTML = texto;
    
}

let agregarPersona = () => {
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    if (nombre !=='' && apellido !== '') {    
        const persona = new Persona(nombre,apellido);
        personas.push(persona);
        mostrarPersonas();
    }else{
        alert('No se puede agregar los campos vacios');
    }
}