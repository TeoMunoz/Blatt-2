const myConst = 13;

console.log(myConst);

const benutzer = {
    vorname: "Marc",
    nachName: "Braun",
    alter: 28
};

const aktualisierterBenutzer = {
    ...benutzer,
    beruf: "Appli"
};