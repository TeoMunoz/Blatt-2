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