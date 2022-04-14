/**
 * Find Animal number based different depth
 */
function animalCount(depth) {
    var animal = 0;
    if (depth <= 10) {
        animal = depth * 50;
        return animal;
    }
    else if (depth >= 11 && depth <= 20) {
        var firstStage = 10 * 50;
        var secondStage = (depth - 10) * 100;
        animal = firstStage + secondStage;
        return animal;
    }
    else if (depth > 20) {
        var firstStage = 10 * 50;
        var secondStage = 10 * 100;
        var thirdStage = (depth - 20) * 300;
        animal = firstStage + secondStage + thirdStage;
        return animal;
    }
}
var result = animalCount(22);
console.log(result);