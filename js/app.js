/* =========================
   REFERENCIAS
========================= */

const homeScreen =
document.getElementById(
    "home-screen"
);

const predictionScreen =
document.getElementById(
    "prediction-screen"
);

const resultScreen =
document.getElementById(
    "result-screen"
);

const flagLeft =
document.getElementById(
    "flag-left"
);

const flagRight =
document.getElementById(
    "flag-right"
);

const winnerFlag =
document.getElementById(
    "winner-flag"
);

const winnerText =
document.getElementById(
    "winner-text"
);

const teamLeftName =
document.getElementById(
    "team-left-name"
);

const teamRightName =
document.getElementById(
    "team-right-name"
);
/* =========================
   VARIABLES
========================= */

let currentWinner = "";
let currentWinnerFlag = "";

/* =========================
   SLEEP
========================= */

function sleep(ms){

    return new Promise(resolve =>
        setTimeout(resolve, ms)
    );
}

/* =========================
   MOSTRAR PREDICCION
========================= */

async function startPrediction(
    team1,
    team2,
    flag1,
    flag2,
    prob1
){

    // ocultar home

    homeScreen.classList.remove(
        "active"
    );

    // mostrar prediction

    predictionScreen.classList.add(
        "active"
    );

    // cargar banderas
    // cargar banderas

   flagLeft.src = flag1;
   flagRight.src = flag2;

   // cargar nombres

   teamLeftName.innerText =
   team1.toUpperCase();

   teamRightName.innerText =
   team2.toUpperCase();


    // decidir ganador

    const random =
        Math.random() * 100;

    let winnerSide;

    if(random <= prob1){

        winnerSide = "left";

        currentWinner =
            team1;

        currentWinnerFlag =
            flag1;

    }else{

        winnerSide = "right";

        currentWinner =
            team2;

        currentWinnerFlag =
            flag2;
    }

    // animacion cabra

    await playRandomAnimation(
        winnerSide
    );

    // pausa

    await sleep(1200);

    // mostrar resultado

    showResult();
}

/* =========================
   RESULTADO
========================= */

function showResult(){

    predictionScreen.classList.remove(
        "active"
    );

    resultScreen.classList.add(
        "active"
    );

    winnerFlag.src =
        currentWinnerFlag;

    winnerText.innerText =
        "GANA " +
        currentWinner.toUpperCase() +
        " !!";
}

/* =========================
   VOLVER AL HOME
========================= */

function goHome(){

    resultScreen.classList.remove(
        "active"
    );

    predictionScreen.classList.remove(
        "active"
    );

    homeScreen.classList.add(
        "active"
    );

    // reset cabra

    if(
        typeof resetGoat ===
        "function"
    ){
        resetGoat();
    }
}