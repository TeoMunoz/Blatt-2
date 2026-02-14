const produkte = [
    {
        id: "1",
        name: "Laptop",
        preis: 1200
    },
    {
        id: "2",
        name: "Smartphone",
        preis: 800
    }
];

const neuesProdukt = {
    id: "3",
    name: "Tablet",
    preis: 500
};

const erweitertesArray = [...produkte, neuesProdukt];

console.log(erweitertesArray);

const produkte2 = [
    { 
        id: "1", 
        name: "Laptop", 
        preis: 1200 },
    { 
        id: "2", 
        name: "Smartphone", 
        preis: 800 }
];

const aktualisiert = produkte2.map(produkt => {
    if (produkt.id === "2") {
        return { ...produkt, preis: 750 };
    }
    return produkt;
});

console.log(aktualisiert);

const kleinsteId = Math.min(...produkte.map(p => Number(p.id)));

const neuesArray = produkte.filter(p => Number(p.id) !== kleinsteId);

console.log(neuesArray);

const reviews = [4.5, 4.0, 5.0, 2.0, 1.0, 5.0, 3.0, 4.0, 1.0, 5.0, 4.5, 3.0, 2.5, 2.0];

const summe = reviews.reduce((acc, wert) => acc + wert, 0);

const durchschnitt = summe / reviews.length;

console.log("Durchschnitt:", durchschnitt);