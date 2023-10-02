const r = 0; //rock
const p = 1; //paper
const s = 2; //scissors

const img = ["img/rock.png", "img/paper.png", "img/scissors.png"];
const plyImg = document.getElementById("ply-img");
const comImg = document.getElementById("com-img");

function versus(playerSelected) {
    let npc = getRndInteger(0, 2);
    plyImg.classList.add("wave-left");
    comImg.classList.add("wave-right");

    setTimeout(() => {
        plyImg.src = img[playerSelected];
        comImg.src = img[npc];

        plyImg.classList.remove("wave-left");
        comImg.classList.remove("wave-right");

        if (npc == playerSelected) {
            fireAlert("Draw!");
        } else if (npc > playerSelected && (npc - playerSelected) != 2) {
            fireAlert("Computer Won!");
        } else if (playerSelected > npc && (playerSelected - npc) != 2) {
            fireAlert("Player Won!");
        } else if (playerSelected == r) {
            fireAlert("Player Won!");
        } else {
            fireAlert("Computer Won!");
        }
    }, 1000);
}

function fireAlert(msg) {
    setTimeout(() => {
        Swal.fire({
            title: msg,
        }).then((result) => {
            plyImg.src = img[r];
            comImg.src = img[r];
        })
    }, 300);
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}