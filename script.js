//nos données constantes
const arrAstro=["Bélier", "Taureau", "Gémeaux", "Cancer", "Lion", "Vierge", "Balance", "Scorpion", "Sagittaire", "Capricone", "Verseau", "Poissons"];
const arrPoke=["camerupt", "snorlax", "mr-mime", "jigglypuff", "arcanine", "chansey", "pidgey", "umbreon", "rapidash", "golem", "slowking", "psyduck"];
const arrMonths=["Janvier", "Février", "Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre"];
const arrAstroEng=["aries", "taurus", "gemini", "cancer", "leo", "virgo", "libra", "scorpio", "sagittarius", "capricorn", "aquarius", "pisces"];

//les variables qu'on va manipuler
let myMonth;
let myDay;

//récupérer le mois en chiffres
let monthChoose = document.getElementById("month");
monthChoose.onchange = () => {
    myMonthInLetter = monthChoose.value;
    myMonth = arrMonths.indexOf(myMonthInLetter)+1;
    console.log(myMonth);
};

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
async function dateReq(){
    if((myDay == null) || myMonth == null){
        alert("Poké pas de ball... Tu dois rentrer une date.")
    } else {
        await buttonClicked()
    }
};

//fonctions quand on clique sur "Découvres ton PokéAstro"
async function buttonClicked() {
    const mois = myMonth
    const jour = myDay
    let signe = getSigne(jour, mois)
    console.log(signe)
    let pokemon = await fetchSpritePokemon(getPokemonName(signe))
    let horoscope = await fetchHoroscope(signe)

    console.log(pokemon)
    console.log(horoscope)
    // getElementById(...).src = pokemon
    // getElementById(...).text = horoscope
};

//récupérer l'image URL du Sprite
async function fetchSpritePokemon(pokemon) {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/'+pokemon+'/');
    const sprite = await response.json();
    return sprite.sprites.other.home.front_default;
};

//récupérer l'horoscope
async function fetchHoroscope(astro) {
    const myAstroEng = arrAstroEng[arrAstro.indexOf(astro)]
    const response = await fetch('https://aztro.sameerkumar.website/?sign=' + myAstroEng + '&day=today', {method: 'POST'});
    const horoscope = await response.json();
    return horoscope.description
}; 

//récupérer le nom du pokémon (en anglais)
function getPokemonName(astro) {
    return arrPoke[arrAstro.indexOf(astro)];
};

//retourne un signe astro selon le jour et le mois
function getSigne(d, m) {
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


//CULTURE G => exemple de promesse et d'async/await :
// const hello = async () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('Coucou')
//         }, 5000)
//     })
// }
