//nos données constantes
const arrAstro=["Bélier", "Taureau", "Gémeaux", "Cancer", "Lion", "Vierge", "Balance", "Scorpion", "Sagittaire", "Capricone", "Verseau", "Poissons"];
const arrPoke=["cubone", "snorlax", "mr-mime", "jigglypuff", "arcanine", "chansey", "pidgey", "umbreon", "rapidash", "golem", "slowking", "psyduck"];
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
    let pokemon = getPokemonName(signe)
    let sprite = await fetchSpritePokemon(pokemon)
    let nomPokemon = await fetchNamePokemon(pokemon)
    let horoscope = await fetchHoroscope(signe)
    let description = await fetchDescription(pokemon)

    console.log(sprite)
    console.log(pokemon)
    console.log(horoscope)
    console.log(nomPokemon)

    document.getElementById("signe").innerHTML = signe
    document.getElementById("pokemonEng").innerHTML = pokemon
    document.getElementById("pokemonFr").innerHTML = nomPokemon
    document.getElementById("sprite").src = sprite
    document.getElementById("horoscope").innerHTML = horoscope
    document.getElementById("description").innerHTML = description

};

//récupérer l'image URL du Sprite
async function fetchSpritePokemon(pokemon) {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/'+pokemon+'/');
    const sprite = await response.json();
    return sprite.sprites.other.home.front_default;
};

async function fetchDescription(pokename) {
    if(pokename=="umbreon"){
        return "Noctali a évolué suite à une longue exposition aux rayons lunaires. Il se cache dans les recoins sombres et attend patiemment le passage de ses ennemis. Les anneaux sur son corps s'illuminent au moment où il bondit. Les nuits de pleine lune, ou s'il est en colère, les anneaux sur sa peau se mettent à briller, terrorisant ceux qui sont proches. Pour se défendre, il émet un gaz empoisonné par les pores de sa peau."
    } else if(pokename=="slowking"){
        return "La morsure de Kokiyas a fait de lui un génie dont l'intelligence rivalise avec celle d'un prix Nobel. Tous les jours, Roigada entreprend des recherches pour résoudre les mystères du monde. Cependant, ce pokémon oublie tout ce qu'il a appris si le Kokiyas qui se trouve sur sa tête s'en va. D'une grande intelligence, il sait rester calme en toute situation stressante."
    } else {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon-species/'+pokename+'/', {method: 'GET'});
    const json = await response.json();
    const desc = json.flavor_text_entries[40].flavor_text + "\n" + json.flavor_text_entries[57].flavor_text + "\n" + json.flavor_text_entries[67].flavor_text;
    return desc;
    };
};


async function fetchNamePokemon(name){
    const result = await fetch('https://pokeapi.co/api/v2/pokemon-species/'+name+'/');
    const nom = await result.json();
    return nom.names[4].name;
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

// const description = {
//     "Ronflex": "Dormir. Manger. Ronfler. Ces trois activités rythment parfaitement ta vie et dieu sait que tu la croques à pleines dents (en même temps, tu croquerais dans n’importe quoi pourvu que ça se mange) mais tout le monde s’accorde à dire que tu es une superbe épaule sur laquelle pleurer ou juste piquer un somme, ça, on peut pas te l’enlever. Pas vraiment fan des Pokéballs, ton truc à toi c’est plutôt les Poké Bowls.",
// }
// description.nomPokemon