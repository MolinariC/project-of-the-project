/*function pjs (pj1,pj2,pj3);
let miPj = " "*/
/*let button = document.getElementById('boton');
let button2 = document.getElementById('boton2');
let parrafo = '';
let parrafo2 = '';*/

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