const myConst = 13;

console.log(myConst);

const benutzer = {
    vorname: "Marc",
    nachName: "Braun",
    alter: 28
};

function setAlter(user, neuesAlter) {
  return { ...user, alter: neuesAlter };
}

function addBeruf(user, beruf) {
  return { ...user, beruf };
}

const benutzerMitAlter = setAlter(benutzer, 31);
const finalerBenutzer = addBeruf(benutzerMitAlter, "Appli");

console.log(finalerBenutzer)

const { beruf, ...benutzerOhneBeruf } = benutzer;

console.log(benutzerOhneBeruf);