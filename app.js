/**
 * logica del juego Se nesesita
 *1 - al apretar un cuadrato se imprima o aparesca una X o O en el cuadrado blanco
 -2 -que se quede fijo el cuadrado blanco.
 -2 cambiar por turno el efecto de aparecion de la X y O 
 -3 condiciones de ganar 3 en raya de un sinbolo ya sea diagonal fila o colunna 
 -4 reiniciar el tablero una vez que se gana y dar un mensaje de ganar 
 -5 en caso de juego atascado sin solucion (tablero lleno y no se a cumplido las condiciones de
    ganar reinicia el juego)
 -6 habilitar un boton para reiniciar el juego en cualquier momento
 */

 const cuadros = document.querySelectorAll(".cuadros");
 const info = document.getElementById("info-juego");
 const boton = document.getElementById("juego-boton")

 var i = 1;

 const jBtn_e =  "pointer-events:initial;opacity:initial;",
      jBtn_d =  "pointer-events:none;opacity:40%;";

let state = false;
//condiciones para ganar
var win = [ [0,1,2],[3,4,5],[6,7,8],
             [0,3,6],[1,4,7],[2,5,8],
             [0,4,8],[2,4,6]
           ];

function comprobar(){
   boton.style.cssText = jBtn_d;
   for (var j = 0; j < win.length; j++) {
      if (cuadros[win[j][0]].innerHTML === "X" && 
         cuadros[win[j][1]].innerHTML === "X" && 
         cuadros[win[j][2]].innerHTML === "X" ){
            info.innerHTML = 'X Gana';
            state = true;
            desactivarcasillas();
      } else if(cuadros[win[j][0]].innerHTML === "O" && 
      cuadros[win[j][1]].innerHTML === "O" && 
      cuadros[win[j][2]].innerHTML === "O"){
            info.innerHTML = 'O Gana';
            state = true;
            desactivarcasillas();
      }      
      }
      if(cuadros[0].innerHTML != "" && 
         cuadros[1].innerHTML != "" && 
         cuadros[2].innerHTML != "" && 
         cuadros[3].innerHTML !== "" && 
         cuadros[4].innerHTML != "" && 
         cuadros[5].innerHTML != "" && 
         cuadros[6].innerHTML != "" && 
         cuadros[7].innerHTML != "" && 
         cuadros[8].innerHTML != "" && 
         state == false){
            info.innerHTML ="Empate";
            desactivarcasillas(false);
      }
}

function desactivarcasillas(y){
   (y === false)?i = Math.floor(Math.random() * (3 - 1)) + 1:0;
    for(var n_boton = 0; n_boton < cuadros.length; n_boton++){    
      cuadros[n_boton].style.setProperty("pointer-events","none"); 
    } 
  boton.style.cssText = jBtn_e;
}

function enpieza(){
   boton.style.cssText = jBtn_d;
  let c1;
  (i % 2 == 0 )?c1= "X":c1= "O"; 
  info.innerHTML = `Presione cualquier cuadro para iniciar: <b>"${c1}"</b> empieza.`;
}

cuadros.forEach(botones =>{
   botones.onclick = function(){
      info.innerHTML = "";
      (i % 2 == 0)?botones.innerHTML = "X": botones.innerHTML = "O";
      comprobar();
      botones.style.setProperty("pointer-events","none"); 
      i++; 
      (i == 3)?i = 1: 0 ;
}
}
);

boton.onclick = function(){
   for(var n_boton = 0; n_boton < cuadros.length; n_boton++){    
      cuadros[n_boton].style.cssText = "pointer-events:initial;";
      cuadros[n_boton].innerHTML = "";
      state = false;
    }
    enpieza();
}

enpieza();