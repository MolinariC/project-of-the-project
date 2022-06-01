alert("Bienvenido... Antes de elegir una Opcion, lee detenidamente...\n Escoje con sabiduria...");
alert("Recuerda, a partir de ahora, tus decisiones seran ingresadas en valores numericos para una mejor experiencia de juego...")
const comienzo = prompt("Desea comenzar su aventura?\n- 1. Si\n- 2. No").toLowerCase();


switch (comienzo) {
    
    case "1":
    case "si":
        
        console.log("Que comience tu aventura...");
        alert("Despiertas...")
        alert("Estas mareado, la cabeza te retumba como si fuera un tambor que alguien esta tocando al ritmo.\n A lo lejos,oyes los vitores de una multitud. Te sientas en la cama, intentas aclarar tu mente...dormiste pesimo.\
Te das cuenta que llevas puesto la mitad inferior de tu uniforme, tus botas tienen barro.\n Observas el resto de la habitacion y ves que tu uniforme esta desperdigado por el cuarto.\
Te incorporas, todavia no tienes claro que paso anoche. Caminas hasta los pies de tu cama, tomas tu gladius\n y al desenvainarla notas algo familiar... Un...un color carmin tiñe tu hoja casi hasta la empuñadura. ")
        alert("-¡¿Que carajos...?! - Exclamas confunso mientras la miras detenidamente.")
        alert("El sol esta muy alto en el cielo, tendrias que haberte presentado hace horas, sabes que esto te costara una buena reprimenda.\
Limpias la hoja de tu espada, el resto de tu uniforme y te alistas rapidamente.")
        alert("Sales de tu cuarto, y comienzas a caminar a paso ligero entre la muchedumbre.\ No sabes que ha pasado para que haya tanta gente reunida, no era un dia festivo...")
        alert("Te cruzas con un Mercader, te saluda haciendo un ademan con la mano:\n 1. Le preguntas que ha sucedido. (Aunque deberias saberlo, eres una figura de autoridad)\n 2. Lo saludas y sigues.  (Despues de todo, ya vas con retraso)")
        
        const eleccion1 = prompt("Que desicion tomara? \n Opcion- 1 \n O quizas... \n Opcion- 2").toLowerCase();
            switch (eleccion1) {
                case "1":
                case "opcion 1":
                    alert("Te acercas al mercader...")
                    alert("Mercader -¡Ave Centurion!...-")
                    alert("*Levantas la mano izquierda en señal de saludo* \n -¿Por que tanto gentio Decio?- le preguntas sin rodeos.\n  -¿Murio alguien o que?! - añades con sorna")
                    alert("Mercader -¿Acaso me preguntas de veras?¿Tu vives aqui o vienes de una isla?- respondio con expresion atonita")
                    alert("Tu rostro cambio abruptamente su expresion - Vamos Decio,¿Que ha pasado? Dime...-")
                    alert("El Mercader en realidad no podia creer que le estuvieras preguntando,pero con algo de duda,\n se acerco a ti lo suficiente como para que nadie mas pudiera oir lo que era de publico conocimiento.")
                    alert("Mercader -Es que, Centurion, anoche han dado muerte a los dos escoltas apostados fuera del cuarto del Emperador,\n  y a este le han apuñalado, no creen que sobreviva, a lo mucho pasa la noche...-")
                    alert("Tratas de mantener una expresion calmada, fria, pero respondes con sequedad.\n - Claro, gracias Decio, disculpame pero voy tarde, que sigas bien.-")
                    alert("Mercader -Claro...¡Suerte, Centurion!-")

                    alert("En tu mente todavia turbulenta intentas vislumbrar tus ultimas horas de ayer, pero el ultimo recuerdo que te viene claro a la mente es estar sentado,\
bebiendo en la taberna y... ¡Narciso!, tu ultimo recuerdo es la cara de esa rata inmunda, serpiente imperial...\n Haces un esfuerzo por recordar mas, pero no puedes, todo esta borroso despues de eso.\
                    \n¿Porque tu ultimo recuerdo era ese miserable liberto arrastrado?, no lo sabes con certeza, pero te inquieta...\n Y ahora resuena en tu mente cada vez con mas fuerza <¡Suerte, Centurion!>...\
                    \n Ja, ¿¡suerte!?...*meneas la cabeza* quizas no estaria de más tener algo de suerte...")
                    
                    alert("La legion a la que perteneces estaba acampando extramuros, pero cuando estas llegando al foro, comienzas a ver a legionarios que estaban\
formando una linea de contencion para que la gente no se agolpe y quiera acceder a las cercanias del palacio imperial.\
                    \n Obviamente no conoces a todos los soldados de la legion, pero en sus escudos puedes leer 'XIII.GEMINA', vas con prisa... y preocupacion.")

                    alert("Ves a tu centuria formada, tu Optio esta al mando momentaneamente...\n 1 - Te acercas a tu unidad (pretendes tomar el mando, normal, como si nada hubiera sucedido)\n \
                    2- Te acercas a hablar con tu Optio (a ver de que van las cosas)\n \
                    3- Te dirijes a hablar con tu Prefecto (para dar las debidas explicaciones de porque has llegado tarde)")
                    
                   let eleccion2 = prompt("Que es lo que haras?\n 1 - Te acercaras a tu unidad como si nada?\n 2 - Hablaras con el Optio, tu sub alterno\n 3 - Vas a hablar con tu superior ").toLowerCase();     
                    switch (eleccion2) {
                        case "1":
                            alert("-¡Optio!- Exclamas a voz en cuello.")
                            alert("Optio - Se...Señor!?- Y se cuadra, confundido, pero obediente - Disculpe señor, que hace aqui?-")
                            alert("- Que que hago aqui? Me hago cargo de mi centuria muchacho, que mas voy a estar haciendo? Y, si me preguntas porque deberia estar con el Prefecto en la ceremonia, pues veras que no es asunto tuyo.-*te volteas a ver la muchedumbre*")
                            alert(" Optio - Señor, disculpeme señor, pero tengo ordenes claras del Prefecto de detenerlo y dar aviso que esta bajo custodia, le pido que no se resista...-")
                            alert(" El ambiente era tan tenso que podriar haberlo cortado con el filo de tu navaja, el nerviosismo reinaba entre los soldados, que se miraban unos a otros, debatiendose entre el deber y la lealtad hacia su Centurion.")
                            alert("-¡¿Que?!-*No puedes creer lo que estas escuchando* Imagino que no por no haberme presentado a tiempo...- *Intentas sacar conclusiones, pero no puedes pensar con claridad ")
                            alert("Optio - Señor, lo siento, pero son ordenes, y creo que no es por haber llegado tarde el dia de hoy- *se voltea hacia los soldados*\n -Soldados, acompañen al Centurion a la tienda, retengale su espada, y monten guardia en la puerta... Vamos! Muevanse! YA!-")
                                                      
                            break;
                    
                        case "2":
                                        
                            break;
                                
                        case "3":
                                                             
                            break;
                                                        
            
                        default:
                            break;
                        }

                    break;
                case "2":
                case "opcion 2":
                    alert("Sigues tu camino, pues llevas prisa")
                    alert("*Levantas la mano izquierda en señal de saludo* \n -¡Voy con prisa Decio,luego!")
                    alert("Mercader -Claro...¡Suerte, Centurion!-")

                    alert("En tu mente todavia turbulenta intentas vislumbrar tus ultimas horas de ayer, pero el ultimo recuerdo que te viene claro a la mente es estar sentado,\
bebiendo en la taberna y... ¡Narciso!, tu ultimo recuerdo es la cara de esa rata inmunda, serpiente imperial...\n Haces un esfuerzo por recordar mas, pero no puedes, todo esta borroso despues de eso.\
                    \n¿Porque tu ultimo recuerdo era ese miserable liberto arrastrado?, no lo sabes con certeza, pero te inquieta...\n Y ahora resuena en tu mente cada vez con mas fuerza <¡Suerte, Centurion!>...\
                    \n Ja, ¿¡suerte!?...*meneas la cabeza* quizas no estaria de más tener algo de suerte...")
                    
                    alert("La legion a la que perteneces estaba acampando extramuros, pero cuando estas llegando al foro, comienzas a ver a legionarios que estaban\
ormando una linea de contencion para que la gente no se agolpe y quiera acceder a las cercanias del palacio imperial.\
                    \nObviamente no conoces a todos los soldados de la legion, pero en sus escudos puedes leer 'XIII.GEMINA', vas con prisa... y preocupacion.")
                    
                    alert("Ves a tu centuria formada, tu Optio esta al mando momentaneamente...\n A- Te acercas a tu unidad (pretendes tomar el mando, normal, como si nada hubiera sucedido)\n \
                    B- Te acercas a hablar con tu Optio (a ver de que van las cosas)\n \
                    C- Te dirijes a hablar con tu Prefecto (para dar las debidas explicaciones de porque has llegado tarde)")


                    break;
                default: console.log("Ha ingresado un valor no valido, reintentalo")
                    break;
            }

        break;

    case "2":
    case "no":
        console.log("Vuelve cuando estes listo...");
            break;
    
    default: console.log("vuelva a ingresar un valor correcto")
        break;
}




class Stats {
    constructor(name,life,attack,defense,weapon,criticaldmg)
    {
        this.name = name;
        this.life = life;
        this.attack = attack;
        this.defense = defense;
        this.weapon = weapon;
        this.criticaldmg= criticaldmg;
    }
    function(){
        this.nombre + "Ataca rapido"
    }

    
}
//swicth case
 const namepj = prompt("ingrese el nombre del personaje");
// const name2 = prompt("ingrese su nombre");
 const pj1 = new Stats(namepj,100,15,70,'Gladius', Math.random()*10);
 console.log(pj1);
 const pj2 = new Stats(namepj,100,18,60,'Spatha',Math.random()*10);
 console.log(pj2);
 const pj3 = new Stats('Brutus',100,15,70,'Axe', Math.random()*10);
 console.log(pj3)

let dmgpj1 = pj1.attack += pj1.criticaldmg;
let dmgpj2 = pj2.attack += pj2.criticaldmg;
let dmgBrutus = pj3.attack += pj3.criticaldmg;
let lifeBrutus = pj3.life;
let lifepj1 = pj1.life;
let lifepj2 = pj2.life;


let attack = document.getElementById("attack");

attack.addEventListener('click', function attack() {
if (lifeBrutus > 0 && lifepj1 > 0  && lifepj2 > 0){
        lifeBrutus -= dmgpj1||dmgpj2;
        lifepj1 -= dmgBrutus;
        lifepj2 -= dmgBrutus;
        console.log(lifeBrutus);
        console.log(lifepj1);
        console.log(lifepj2);
} else if(lifeBrutus < 0){
    console.log("Ganaste la batalla")
} else  {
    console.log("Perdiste la batalla")
}
});
