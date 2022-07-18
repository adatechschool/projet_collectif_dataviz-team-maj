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

    // let myAstro = quelAstro(myDay, MyMonth);

    // let myPoke = pokeForAstro(myAstro);

}

// function quelAstro(d, m){

// };

// function pokeForAstro(astro){
// let poke;
//     switch(astro){
//         case "Bélier":
//             poke = "Camérupt"
//             break;
//         case "Taureau":
//             ...
//             break;
//     }
//     return poke;
// } 
