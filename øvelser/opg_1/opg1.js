const spriteKnap = document.querySelector("#sprite");
const beerKnap = document.querySelector("#beer");
const vodkaKnap = document.querySelector("#vodka");
const colaKnap = document.querySelector("#cola");

function alkoholEllerEj(event) {
  const clickedButton = event.target.id;
  if (clickedButton === "sprite") {
    console.log("sodavand");
  } else if (clickedButton === "beer") {
    console.log("alkohol");
  } else if (clickedButton === "vodka") {
    console.log("alkohol");
  } else if (clickedButton === "cola");
  {
    console.log("sodavand");
  }
}

spriteKnap.addEventListener("click", alkoholEllerEj);
beerKnap.addEventListener("click", alkoholEllerEj);
vodkaKnap.addEventListener("click", alkoholEllerEj);
colaKnap.addEventListener("click", alkoholEllerEj);
