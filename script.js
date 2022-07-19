const arrAstro=["Bélier", "Taureau", "Gémeaux", "Cancer", "Lion", "Vierge", "Balance", "Scorpion", "Sagittaire", "Capricone", "Verseau", "Poissons"]
console.log(arrAstro.length);

const arrPoke=["camerupt", "snorlax", "mrmime", "jigglypuff", "arcanine", "chansey", "ditto", "umbreon", "rapidash", "golem", "slowking", "psyduck"];
console.log(arrPoke.length);

let myAstro;
let myPoke;

function getValue(){
    // let dayBirth = document.getElementById("dayBirth").value;
    // let monthBirth = document.getElementById("monthBirth").value;
    // console.log(dayBirth, monthBirth);

    let myBirth = document.getElementById("myBirth").value;
    console.log(myBirth);

    let myMonth = myBirth.split('-')[1];
    console.log(myMonth);

    let myDay = myBirth.split('-')[2];
    console.log(myDay);

    myAstro = getAstro(myDay, myMonth);
    // console.log(`Tu es ${myAstro} !`);

    myPoke = arrPoke[arrAstro.indexOf(myAstro)];
    // console.log(`Ton Poké-Astro est ${myPoke} :)`);

    printAstro();
}

async function printAstro(){
    const myAstroDef = await myAstro;
    const myPokeDef = await myPoke;
    console.log(myAstroDef + myPokeDef);
    document.write(`<h1>Tu es ${myAstroDef} ! Ton Pokémon est donc ${myPokeDef.charAt(0).toUpperCase()+myPokeDef.slice(1)}</h1>`);
}

//retourne un signe astro selon le jour et le mois de naissance
function getAstro(d, m){
    if((d>20 && m==3) || (d<=19 && m==4)){
    return arrAstro[0];
    }
    else if((d>19 && m==4) || (d<=20 && m==5)){
    return arrAstro[1];
    }
    else if((d>20 && m==5) || (d<=21 && m==6)){
    return arrAstro[2];
    }    
    else if((d>21 && m==6) || (d<=22 && m==7)){
    return arrAstro[3];
    } 
    else if((d>22 && m==7) || (d<=22 && m==8)){
    return arrAstro[4];
    }
    else if((d>21 && m==8) || (d<=22 && m==9)){
    return arrAstro[5];
    }
    else if((d>22 && m==9) || (d<=23 && m==10)){
    return arrAstro[6];
    }
    else if((d>23 && m==10) || (d<=22 && m==11)){
    return arrAstro[7];
    }
    else if((d>22 && m==11) || (d<=21 && m==12)){
    return arrAstro[8];
    }
    else if((d>21 && m==12) || (d<=20 && m==1)){
    return arrAstro[9];
    }
    else if((d>19 && m==1) || (d<=18 && m==2)){
    return arrAstro[10];
    }
    else if((d>18 && m==2) || (d<=20 && m==3)){
    return arrAstro[11];
    }
};