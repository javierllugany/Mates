let matesYGatos = {};

matesYGatos.presentacion=function(){
    let telon1=document.getElementById("telonTotal");
    if (telon1.style.display="grid") {
       telon1.style.display="none";
    }
    let nombre=prompt("Cuál es tu nombre?")
    matesYGatos.participante={identidad:nombre, puntaje:0}
    let saludo= "Hola "+nombre+ "!! Bienvenide al Mundo de los Gatitos Exploradores!!";
    let saludoParticipante=document.getElementById("nombre1");
    saludoParticipante.textContent=saludo;
    matesYGatos.crearCuenta();
}

matesYGatos.sigueOcambiaGato=function(){
  let telon=document.getElementById("telonTotal");
  telon.style.display="grid";
  let pregunta= "Muy bien "+matesYGatos.participante.identidad+ "!! y ahora qué quieres hacer?";
  let decidite=document.getElementById("queHaces");
  decidite.textContent=pregunta;
}

matesYGatos.crearCuenta = function(){
  let telon2=document.getElementById("telonTotal");
  if (telon2.style.display="grid") {
     telon2.style.display="none";
  }

  let randomNumeroA=Math.floor(Math.random()*999);
  numeroA=0+randomNumeroA;
  let primerNumero=document.getElementById("a1");
  primerNumero.textContent=numeroA;

  let signo=["+", "-", "x"];
  let randomSigno=Math.floor(Math.random()*3);
  signo=signo[randomSigno];
  let signoCuenta=document.getElementById("signo");
  signoCuenta.textContent=signo;

  if (signo=="-"){
    randomNumeroB=Math.floor(Math.random()*(numeroA-1))}

  else if (signo=="x"){
    randomNumeroB=Math.floor(Math.random()*9)}

  else {
    randomNumeroB=Math.floor(Math.random()*999)
  }

  numeroB=0+randomNumeroB;
  let segundoNumero=document.getElementById("b1");
  segundoNumero.textContent=numeroB;

  let verlinea=document.getElementById("linea");
    if (verlinea.style.display="none"){
      verlinea.style.display="block";
    }

  let resultado=document.getElementById("resultado");
  //resultado.value.reset("");
  resultado.value="";
  if (resultado.style.display="none"){
    resultado.style.display="block";
    resultado.focus();
  }

  let verInputComprobar=document.getElementById("prueba");
    if (prueba.style.display="none"){
      prueba.style.display="block";
    }

}

matesYGatos.comprobarResultado=function(){
  let resultadoCuenta=document.getElementById("resultado").value;
  let resultado=document.getElementById("resultado");
  let numeroA=document.getElementById("a1").textContent;
  let numeroB=document.getElementById("b1").textContent;
  let signo=document.getElementById("signo").textContent;
  resultadoCuenta=parseInt(resultadoCuenta);
  a=parseInt(numeroA);
  b=parseInt(numeroB);

  if (signo=="+" && resultadoCuenta==a+b){
    alert("Perfecto "+matesYGatos.participante.identidad);
    matesYGatos.sigueOcambiaGato();
  }

  else if (signo=="+" && resultadoCuenta!=a+b){
    alert("Epa! Revisemos de nuevo "+matesYGatos.participante.identidad);
    resultado.focus();
  }

  if (signo=="-" && resultadoCuenta==a-b){
    alert("Perfecto "+matesYGatos.participante.identidad);
    matesYGatos.sigueOcambiaGato();
  }

  else if (signo=="-" && resultadoCuenta!=a-b){
    alert("Epa! Revisemos de nuevo "+matesYGatos.participante.identidad);
    resultado.focus();
  }

  if (signo=="x" && resultadoCuenta==a*b){
    alert("Perfecto "+matesYGatos.participante.identidad);
    matesYGatos.sigueOcambiaGato();
  }

  else if (signo=="x" && resultadoCuenta!=a*b){
    alert("Epa! Revisemos de nuevo "+matesYGatos.participante.identidad);
    resultado.focus();
  }
 }

 let comprobar=document.getElementById("prueba");
 comprobar.onclick=matesYGatos.comprobarResultado;

 let sigue=document.getElementById("sigue");
 sigue.onclick=matesYGatos.crearCuenta;
 let cambia=document.getElementById("cambia");
 cambia.onclick=matesYGatos.presentacion;
