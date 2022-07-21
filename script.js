//nos données constantes
const arrAstro=["Bélier", "Taureau", "Gémeaux", "Cancer", "Lion", "Vierge", "Balance", "Scorpion", "Sagittaire", "Capricone", "Verseau", "Poissons"];
const arrPoke=["camerupt", "snorlax", "mr-mime", "jigglypuff", "arcanine", "chansey", "pidgey", "umbreon", "rapidash", "golem", "slowking", "psyduck"];
const arrMonths=["Janvier", "Février", "Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre"]

//les variables qu'on va manipulé
let myMonth;
let myDay;
let myAstro;
let myPoke;

//récupérer le mois en chiffres
let monthChoose = document.getElementById("month");
monthChoose.onchange = () => {
    myMonthInLetter = monthChoose.value;
    myMonth = arrMonths.indexOf(myMonthInLetter)+1;
    console.log(myMonth);
}

//récupérer le jour
let dayChoose = document.getElementById("day");
dayChoose.onchange = () => {
    myDay = dayChoose.value;
    console.log(myDay);
};

//print l'astro
function getMyAstro(){
    myAstro = getAstro(myDay, myMonth);
    const astroOnScreen = `Tu es ${myAstro} !`
    document.getElementById("printAstro").innerHTML = astroOnScreen;
    console.log(myAstro);
};

//print le poké
async function getMyPoke(){
    myPoke = await arrPoke[arrAstro.indexOf(myAstro)];
    console.log(myPoke);
    const pokeOnScreen = `Ton PokéAstro est ${myPoke} :)`
    document.getElementById("printPoke").innerHTML = pokeOnScreen;
    console.log(myPoke);
}



//vérifie qu'il y a une date, si oui, print l'astro et le poké
function dateReq(){
    if((myDay == null) || myMonth == null){
        alert("Poké pas de ball... Tu dois rentrer une date.")
    } else {
        getMyAstro();
        getMyPoke();
    }
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

