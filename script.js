const title = document.getElementById("title");

setTimeout(() => {
  title.innerText = "Bienvenue dans le juste prix BEAUF";
}, 2000);

setTimeout(() => {
  title.innerText =
    "Devine le prix de la zoé de Flo (un nombre entre 0 et 100k). Trouves en 8 essais, ou flo te nique ta race.";
}, 4000);

setTimeout(() => {
  const randomNumber = Math.floor(Math.random() * Math.floor(100)) + 1;
  let userNumber = 0;
  let lifes = 8;

  do {
    if (lifes === 1) {
      userNumber = parseInt(prompt("Dernier essai, ou tu vas te faire niquer"));
    } else if (lifes <= 4) {
      userNumber = parseInt(
        prompt("Il te reste " + lifes + " vies, fais gaffe à toi")
      );
    } else {
      userNumber = parseInt(prompt("Quel est le nombre ?"));
    }
    if (userNumber < randomNumber) {
      alert(
        "La zoé coute bien plus chère ! Sale gueux, n'oublie pas que Flo est un pigeon"
      );
      lifes--;
    } else if (userNumber > randomNumber) {
      alert("Voyons, Flo n'est pas aussi riche que ça !");
      lifes--;
    } else if (userNumber !== randomNumber) {
      alert("wtf");
      lifes--;
    }
  } while (userNumber !== randomNumber && lifes > 0);

  if (lifes > 0) {
    title.innerText =
      "Bravo, la zoé de flo coute bien " + randomNumber + " K !";
  } else {
    title.innerText =
      "La zoé de flo coutait " +
      randomNumber +
      " K ! Flo va te niquer ta race, bravo !";
  }
  document.getElementById("restart").style.visibility = "visible";
}, 8000);

document.getElementById("restart").addEventListener("click", e => {
  location.reload();
});
