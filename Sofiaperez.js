let usu=prompt("Ingrese su nombre de ususario:");
let email=prompt("Ingrese su email");
let ide=prompt("Ingrese su número de identificacion");
let valemail= email.includes("@");
//validacion incorrecta ojo 
let valide= (ide(length=>5&&length<=10));
switch (true){
    case(valemail&&valide):
    console.log(usu," email y numero de identificacion validos");
    break;
    case(valemail==false):
        console.log(usu,"email no valido");
        break;
        case(ide ):
        console.log(usu," el numero de identificacion no es valido");
        case(valemail&&valide==false):
            console.log(usu," email e identificacion incorrectos");
        break;
        
}

nota: 1,8