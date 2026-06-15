/* =========================
   CABRA
========================= */

const goat =
document.getElementById(
    "goatArena"
);

/* =========================
   SLEEP
========================= */

function sleep(ms){

    return new Promise(resolve =>
        setTimeout(resolve, ms)
    );
}

/* =========================
   RESET
========================= */

function resetGoat(){

    goat.src =
    "assets/goat/goat-neutral.png";

    goat.style.left = "50%";

    goat.classList.remove(
        "look-left"
    );

    goat.classList.remove(
        "look-right"
    );
}

/* =========================
   MIRAR
========================= */

function lookLeft(){

    goat.classList.remove(
        "look-right"
    );

    goat.classList.add(
        "look-left"
    );
}

function lookRight(){

    goat.classList.remove(
        "look-left"
    );

    goat.classList.add(
        "look-right"
    );
}

/* =========================
   MOVER AL GANADOR
========================= */

function moveToWinner(side){

    if(side === "left"){

        lookLeft();

        goat.style.left = "39%";

    }else{

        lookRight();

        goat.style.left = "61%";
    }
}

/* =========================
   ANIMACION 1
   DECISION SEGURA
========================= */

async function decisionSegura(
    winnerSide
){

    resetGoat();

    goat.src =
    "assets/goat/pensativo.png";

    lookLeft();

    await sleep(700);

    lookRight();

    await sleep(700);

    goat.src =
    "assets/goat/contento.png";

    await sleep(500);

    goat.src =
    "assets/goat/caminando.png";

    moveToWinner(
        winnerSide
    );

    await sleep(1800);

    goat.src =
    "assets/goat/contento.png";
}

/* =========================
   ANIMACION 2
   DUDA Y CORRECCION
========================= */

async function dudaCorreccion(
    winnerSide
){

    resetGoat();

    goat.src =
    "assets/goat/pensativo.png";

    lookLeft();

    await sleep(800);

    goat.src =
    "assets/goat/caminando.png";

    goat.style.left = "40%";

    await sleep(1200);

    goat.src =
    "assets/goat/deteniendose.png";

    await sleep(700);

    goat.src =
    "assets/goat/curioso.png";

    await sleep(700);

    goat.src =
    "assets/goat/corriendo.png";

    moveToWinner(
        winnerSide
    );

    await sleep(1400);

    goat.src =
    "assets/goat/contento.png";
}

/* =========================
   ANIMACION 3
   AMAGUE
========================= */

async function amague(
    winnerSide
){

    resetGoat();

    goat.src =
    "assets/goat/curioso.png";

    lookRight();

    await sleep(700);

    goat.src =
    "assets/goat/caminando.png";

    goat.style.left = "60%";

    await sleep(1000);

    goat.src =
    "assets/goat/deteniendose.png";

    await sleep(700);

    goat.src =
    "assets/goat/sorprendido.png";

    await sleep(700);

    goat.src =
    "assets/goat/corriendo.png";

    moveToWinner(
        winnerSide
    );

    await sleep(1500);

    goat.src =
    "assets/goat/contento.png";
}

/* =========================
   ANIMACION 4
   CALMADA
========================= */

async function calmada(
    winnerSide
){

    resetGoat();

    if(winnerSide === "left"){

        lookLeft();

    }else{

        lookRight();
    }

    goat.src =
    "assets/goat/contento.png";

    await sleep(600);

    goat.src =
    "assets/goat/caminando.png";

    moveToWinner(
        winnerSide
    );

    await sleep(2200);

    goat.src =
    "assets/goat/contento.png";
}

/* =========================
   ANIMACION 5
   INDECISA
========================= */

async function indecisa(
    winnerSide
){

    resetGoat();

    goat.src =
    "assets/goat/pensativo.png";

    lookLeft();

    await sleep(700);

    lookRight();

    await sleep(700);

    goat.src =
    "assets/goat/caminando.png";

    lookLeft();

    goat.style.left = "39%";

    await sleep(1000);

    goat.style.left = "61%";

    await sleep(800);

    goat.src =
    "assets/goat/curioso.png";

    await sleep(700);

    goat.src =
    "assets/goat/corriendo.png";

    moveToWinner(
        winnerSide
    );

    await sleep(1400);

    goat.src =
    "assets/goat/contento.png";
}

/* =========================
   ANIMACION ALEATORIA
========================= */

async function playRandomAnimation(
    winnerSide
){

    const animations = [

        decisionSegura,
        dudaCorreccion,
        amague,
        calmada,
        indecisa

    ];

    const randomIndex =
    Math.floor(
        Math.random() *
        animations.length
    );

    await animations[
        randomIndex
    ](
        winnerSide
    );
}