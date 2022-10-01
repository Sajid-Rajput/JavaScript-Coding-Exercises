// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.

"use strict";

function car_information(manufacturer, model, ...optional_features) {
    let car = {
        manufacturer_name: manufacturer,
        model: model
    }

    if(optional_features.length != 0){
        for (const iterator of optional_features) {
            Object.assign(car, iterator);
        }
    }

    console.log(car);
}


car_information("Honda", 2015);
car_information("Toyota", 2022, {color: "Gold"}, {Car_Name: "Camery"});
car_information("Mercedes", 2020);
car_information("Audi", 2022, {color: "Orange Black"}, {Car_Name: "Spyder"}, {Variant: "Semi-Electric"});