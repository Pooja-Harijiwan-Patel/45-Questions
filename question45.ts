type Car = {
    manufacturer: string;
    model: string;
    [key: string]: any; 
}

function createCar(manufacturer: string, model: string, extras: Record<string, any>): Car {
    return { manufacturer, model, ...extras };
}


const myCar: Car = createCar("Toyota", "Camry", { color: "red", hasSunroof: true });


console.log(myCar);
