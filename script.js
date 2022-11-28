//nos données constantes
const arrAstro = [
    "Bélier",
    "Taureau",
    "Gémeaux",
    "Cancer",
    "Lion",
    "Vierge",
    "Balance",
    "Scorpion",
    "Sagittaire",
    "Capricorne",
    "Verseau",
    "Poissons",
];
const arrPoke = [
    "cubone",
    "snorlax",
    "mr-mime",
    "jigglypuff",
    "arcanine",
    "chansey",
    "pidgey",
    "umbreon",
    "rapidash",
    "golem",
    "slowking",
    "psyduck",
];
const arrMonths = [
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Août",
    "Septembre",
    "Octobre",
    "Novembre",
    "Décembre",
];
const arrAstroEng = [
    "aries",
    "taurus",
    "gemini",
    "cancer",
    "leo",
    "virgo",
    "libra",
    "scorpio",
    "sagittarius",
    "capricorn",
    "aquarius",
    "pisces",
];

const noctaliDesc =
    "Noctali a évolué suite à une longue exposition aux rayons lunaires. Il se cache dans les recoins sombres et attend patiemment le passage de ses ennemis. Les anneaux sur son corps s'illuminent au moment où il bondit. Les nuits de pleine lune, ou s'il est en colère, les anneaux sur sa peau se mettent à briller, terrorisant ceux qui sont proches. Pour se défendre, il émet un gaz empoisonné par les pores de sa peau.";
const roigadaDesc =
    "La morsure de Kokiyas a fait de lui un génie dont l'intelligence rivalise avec celle d'un prix Nobel. Tous les jours, Roigada entreprend des recherches pour résoudre les mystères du monde. Cependant, ce pokémon oublie tout ce qu'il a appris si le Kokiyas qui se trouve sur sa tête s'en va. D'une grande intelligence, il sait rester calme en toute situation stressante.";

const pourquoi = {
    Bélier:
        "Quand on te vois débarquer, avec ton casque et ta massue, on sait qu'il ne faut pas te chercher ! Impulsif&middotve et un peu brut de décoffrage, tu déboules à 2 000 à l'heure dans l'arène pour rugir, dégommer et donner des coups de crânes. Tu la joues gros dino féroce mais c'est surtout pour cacher que sous l'armure, se cache un animal tout mignon, tout doux, un baby dino qui a gardé ses dents de lait et son âme d'enfant.",
    Taureau:
        "Dormir. Manger. Ronfler. Ces trois activités rythment parfaitement ta vie et dieu sait que tu la croques à pleines dents (en même temps, tu croquerais dans n’importe quoi pourvu que ça se mange) mais tout le monde s’accorde à dire que tu es une superbe épaule sur laquelle pleurer ou juste piquer un somme, ça, on peut pas te l’enlever. Pas vraiment fan des Pokéballs, ton truc à toi c’est plutôt les Poké Bowls. (Source: Topito)",
    Gémeaux:
        "Les gens disent de toi que tu es plutôt loufoque mais personne ne sait trop ce que tu fais là et pourquoi étant donné qu’on ne t’invite plus depuis que tu t’es mis à imiter les personnes en face de toi. Il ne te reste plus qu’à aller postuler à la Foire de Crête pour tenter une reconversion professionnelle. (Source: Topito)",
    Cancer:
        "Tout mignon, tout rond et tout câlinou, tu es un superbe atout à avoir dans son équipe quand le moral est au plus bas. Mais attention, quand tu te sens attaqué, tu n’hésites pas à démontrer toute l’étendue de ta férocité et à détruire tes adversaires avec une bonne grosse berceuse du sheitan qui fait bien mal mon pote. (Source: Topito)",
    Lion: "Avec ta crinière flamboyante et ton pas altier, tu envoies du lourd. Vénéré&middote à travers l'univers Pokémon, tu te sais au-dessus de la mêlée et tu es rarement sujet&middote aux tergiversations. Comme le signe du Lion dominé par l'astre solaire, tu tires ta puissance de ton feu intérieur et tu nous aides, nous pauvres mortels, à nous inspirer de ta force tranquille pour lutter contre le syndrôme de l'imposteur.",
    Vierge:
        "À l’instar de cette petite personne infirmière, tu es toujours prêt à rendre service et à distribuer la joie et des oeufs autour de toi. On t’aime pour ces petites étoiles qui brillent dans tes yeux quand tu rends service aux gens et qu’ils te disent que tu as raison, mais on te déteste quand tu as tort. Moui vaut mieux pas rester dans les parages quand tu te mets à chonchonner. (Source: Topito)",
    Balance:
        "Avec ton joli plumage, tu égayes le ciel de Bourg Palette et de ses forêts. Adaptable et de bonne compagnie, tu sais suivre les courants d'air chaud et éviter les zones hasardeuse pour planer, peinard&middote, à l'abri des embrouilles. Tout est jeu d'équilibre... Toi dont le signe astrologie est dominé par la planète Vénus, tu as le goût de l'hamonie et du consensus, mais pas du conflit. Comme un Roucool qui bat des ailes au premier bruit suspect, tu as aussi le don de te défiler face au danger (et à la moindre prise de décision, miskine).",
    Scorpion:
        "Parce que tu es le signe de la mort et de la renaissance, c’est dans l’ombre que tu puises toutes tes forces pendant que tout le monde autour de toi passe son temps à se dorer la pilule. Ton mysticisme légendaire fait que les soirs de pleine lune, tu brilles comme un p’tit diamant ce qui a tendance à rendre fou de désir tous les habitants du quartier. Malheureusement tu habites à Leménil-Mitry. (Source: Topito)",
    Sagittaire:
        "Élu meilleur sprinteur du Pokéworld, ta devise à toi c’est « galope la vie avant qu’elle te galope ». Du coup tu as un peu tout le temps le feu aux fesses et ça commence à légèrement inquiéter ton entourage. Il serait peut-être temps de te poser et réfléchir un peu au sens de la vie non ? (Source: Topito)",
    Capricorne:
        "Tu as l'air indestructible grâce à ta carapace. Comme Grolem, dont la peau se solidifie comme une armure, tu resistes à la pression (et parfois aussi au fun). Ancré&middote au sol, tu ne perds jammais de vu tes objectifs et tu avances lentement mais sûrement dans leur direction. Planqué&middote sous tes rochers, on pourrait te croire imperméable aux émotions. Mais toute cette pierre vient en réalité protéger un cœur fragile, que tu laisse apparaître hors de tout danger.",
    Verseau:
        "Roigada est une drôle de créature possédant une intelligence clairement supérieure à la moyenne, ce qui te confère le pouvoir d’attirer les gens comme des aimants, jusqu’à ce qu’on se rende compte que tu es juste complètement gratiné à l’intérieur comme le laissait présager ton goût en matière de chapeaux. Et puis parce que tu étais un hipster avant la naissance des hipsters, tu te nourris exclusivement d’eau de coco et d’algues, à l’instar de ton Pokémon totem. (Source: Topito)",
    Poissons:
        "Pas facile d’être confus et duper comme ça au quotidien, hein, ma petite truite fumée. Tout le monde pense donc que tu es un peu marteau quand en réalité tu es juste une petite créature sans défense et simplement victime de ses pouvoirs mystiques au quotidien. Laisse parler les gens. (Source: Topito)",
};

//URL de la page result
const url = new URL(window.location.href);

//on récupère le mois en lettre
let monthChoose = url.searchParams.get('month');
//puis on le convertit en chiffre :
let myMonth = arrMonths.indexOf(monthChoose) + 1;

//on récupère le jour en chiffre
let myDay = url.searchParams.get('day');

let prenomUser = url.searchParams.get('prenomUser');

//vérifie qu'il y a une date, si oui, print l'astro et le poké
function checkBouton() {
    if (myDay == null || myMonth == null || prenomUser == null) {
        window.open("page.html", target="_self");
    }
}

buttonClicked();

//fonctions quand on clique sur "Découvres ton PokéAstro"
async function buttonClicked() {
    const mois = myMonth;
    const jour = myDay;
    let signe = getSigne(jour, mois);
    console.log(signe);
    let pokemon = getPokemonName(signe);
    let sprite = await fetchSpritePokemon(pokemon);
    let nomPokemon = await fetchNamePokemon(pokemon);
    let horoscope = await fetchHoroscope(signe);
    let description = await fetchDescription(pokemon);
    let pourquoiPoke = pourquoi[signe];

    console.log(sprite);
    console.log(pokemon);
    console.log(horoscope);
    console.log(nomPokemon);

    document.getElementById("nom").innerHTML = `${prenomUser}, tu es ${signe},<br/>ton PokéAstro est...`
    document.getElementById("pokemonFr").innerHTML = `<br/>${nomPokemon} !<br/>`;
    document.getElementById("pokemonEng").innerHTML = (
        pokemon.charAt(0).toUpperCase() + pokemon.slice(1)
    ).italics();
    document.getElementById("sprite").src = sprite;
    document.getElementById("horoscopeTitre").innerHTML = 'Ton horoscope du jour :<br/>';
    document.getElementById("horoscope").innerHTML = horoscope;
    document.getElementById("descriptionTitre").innerHTML = 'Description :<br/>';
    document.getElementById("description").innerHTML = description;
    document.getElementById("pourquoiTitre").innerHTML = 'Pourquoi c\'est ton PokéAstro :<br/>';
    document.getElementById("pourquoi").innerHTML = pourquoiPoke;
}

//récupérer l'image URL du Sprite
async function fetchSpritePokemon(pokemon) {
    const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon/" + pokemon + "/"
    );
    const sprite = await response.json();
    console.log(sprite);
    return sprite.sprites.other.home.front_default;
}

//récupérer la description du Pokémon depuis l'API
async function fetchDescription(pokename) {
    if (pokename == "umbreon") {
        return noctaliDesc;
    } else if (pokename == "slowking") {
        return roigadaDesc;
    } else {
        const response = await fetch(
            "https://pokeapi.co/api/v2/pokemon-species/" + pokename + "/",
            { method: "GET" }
        );
        const json = await response.json();
        console.log(json)
        const desc =
            json.flavor_text_entries[40].flavor_text +
            "\n" +
            json.flavor_text_entries[57].flavor_text;
        return desc;
    }
}

//récupérer le nom français du Pokémon
async function fetchNamePokemon(name) {
    const result = await fetch(
        "https://pokeapi.co/api/v2/pokemon-species/" + name + "/"
    );
    const nom = await result.json();
    return nom.names[4].name;
}

//récupérer l'horoscope en anglais
async function fetchHoroscope(astro) {
    const myAstroEng = arrAstroEng[arrAstro.indexOf(astro)];
    const response = await fetch(
        "https://aztro.sameerkumar.website/?sign=" + myAstroEng + "&day=today",
        { method: "POST" }
    );
    const horoscope = await response.json();
    return horoscope.description;
}

//récupérer le nom du Pokémon en anglais
function getPokemonName(astro) {
    return arrPoke[arrAstro.indexOf(astro)];
}

//retourne un signe astro selon le jour et le mois
function getSigne(d, m) {
    if ((d > 20 && m == 3) || (d <= 19 && m == 4)) {
        return arrAstro[0];
    } else if ((d > 19 && m == 4) || (d <= 20 && m == 5)) {
        return arrAstro[1];
    } else if ((d > 20 && m == 5) || (d <= 21 && m == 6)) {
        return arrAstro[2];
    } else if ((d > 21 && m == 6) || (d <= 22 && m == 7)) {
        return arrAstro[3];
    } else if ((d > 22 && m == 7) || (d <= 22 && m == 8)) {
        return arrAstro[4];
    } else if ((d > 21 && m == 8) || (d <= 22 && m == 9)) {
        return arrAstro[5];
    } else if ((d > 22 && m == 9) || (d <= 23 && m == 10)) {
        return arrAstro[6];
    } else if ((d > 23 && m == 10) || (d <= 22 && m == 11)) {
        return arrAstro[7];
    } else if ((d > 22 && m == 11) || (d <= 21 && m == 12)) {
        return arrAstro[8];
    } else if ((d > 21 && m == 12) || (d <= 20 && m == 1)) {
        return arrAstro[9];
    } else if ((d > 19 && m == 1) || (d <= 18 && m == 2)) {
        return arrAstro[10];
    } else if ((d > 18 && m == 2) || (d <= 20 && m == 3)) {
        return arrAstro[11];
    }
}

//CULTURE G => exemple de promesse et d'async/await :
// const hello = async () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('Coucou')
//         }, 5000)
//     })
// }

//OLD METHODO DE RECUPERATION DES DONNEES =>

//récupérer le mois en chiffres
// let monthChoose = document.getElementById("month");
// monthChoose.onchange = () => {
//     myMonthInLetter = monthChoose.value;
//     myMonth = arrMonths.indexOf(myMonthInLetter) + 1;
//     console.log(myMonth);
// };

//récupérer le jour
// let dayChoose = document.getElementById("day");
// dayChoose.onchange = () => {
//     myDay = dayChoose.value;
//     console.log(myDay);
// };

//récupérer le prénom
// let prenomChoose = document.getElementById("prenomUser");
// prenomChoose.onchange = () => {
//     prenomUser = prenomChoose.value;
// };