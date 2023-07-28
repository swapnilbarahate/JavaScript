const radius = [3, 2, 4, 1];
const area_circle = function(radius) {
    return Math.PI * radius * radius;
};
const cicumference = function(radius) {
    return 2 * Math.PI * radius;
}
const diameter = function(radius) {
    return 2 * radius;
}

const calculate = function(radius, logic) {
    const output = [];
    for (let i = 0; i < radius.length; i++) {
        output.push(logic(radius[i]));
    }
    return output;
};
const change = function(radius) {

    for (let i = 0; i < radius.length; i++) {
        radius[i] = radius[i] + 1;
    }
};
console.log(calculate(radius, area_circle));
console.log(calculate(radius, cicumference));
console.log(calculate(radius, diameter));