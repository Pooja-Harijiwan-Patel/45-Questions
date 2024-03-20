var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function createCar(manufacturer, model, extras) {
    return __assign({ manufacturer: manufacturer, model: model }, extras);
}
// Create a car object with manufacturer, model, color, and optional feature
var myCar = createCar("Toyota", "Camry", { color: "red", hasSunroof: true });
// Print the car object
console.log(myCar);
