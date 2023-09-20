let names;
let weight;

function person(names, weight) {
    names = prompt("Enter your name");
    weight = Number(prompt("Enter your weight in kg"));
    return `${names} Weights in Pounds: ${weight * 2.2} lbs`
}
alert(person());