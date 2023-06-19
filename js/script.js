
let car1 = {
    // 1. p.v (Many)
    brand:"TATA",
    year:2023,
    model:"Harrier",
    color:"black",
    type:'SUV',
    engine:"EV/Petrol/Diesel",
    price:200000,

    // 2.Method (ManY)
    getFullDetail_1(){

        // Every function return something
        return this.brand + this.year + this.model + this.color + this.type;
    }
}

let car2 = {
    // 1. p.v (Many)
    brand:"Mahindra",
    year:2022,
    model:"Thar",
    color:"black",
    type:'Gypsy',
    engine:"Diesel",
    price:1400000,

    // 2.Method (ManY)
    getFullDetail_2(){

        // Every function return something
        return this.brand + this.year + this.model + this.color + this.type;
    }
}

const car3 = {
    // 1. p.v (Many)
    brand:"Hundai",
    year:2023,
    model:"Verna",
    color:"white",
    type:'Sedan',
    engine:"Pertrol",
    price:1600000,

    // 2.Method (ManY)
    getFullDetail_3(){

        // Every function return something
        return this.brand + this.year + this.model + this.color + this.type;
    }
}

console.log(car1.getFullDetail_1());
console.log(car2.getFullDetail_2());
console.log(car3.getFullDetail_3());


console.log(car1.brand); //object.property
console.log(car2["brand"]); //object["property"]
let x = "brand"
console.log(car3[x]); //object [expression] x is an expression






