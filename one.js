const car = {
    make: "Kia",
    model: "Sonet",
    year: 2020,
};

function displayAllProperties(car) {
    for (const property in car) {
        console.log(`${property}: ${car[property]}`);        
    }
}


displayAllProperties(car);
