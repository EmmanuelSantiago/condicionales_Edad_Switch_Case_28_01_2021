let key = prompt('Ingrese su edad:');

if (key > 18) {
    data = 1;
} else if (key == 18) {
    data = 2;
} else { 
   data = 3; 
}

switch (data) {
    case 1:
        alert(`Es mayor de edad, el usuario tiene ${key} años`);
        break;
    case 2:
        alert(`Tiene ${key} años`);
        break;
    default:
        alert(`La edad ingresada no cumple con los parámetros `)
        break;
}