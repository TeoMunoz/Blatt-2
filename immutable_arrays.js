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