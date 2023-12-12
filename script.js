// Complete the js code
function Car(make, model) {
	this.make=make;
	this.model=model;
}
Car.prototype.getMakeModel(){
	return `${this.make} ${this.model}`;
}
function sportsCar(make, model, topSpeed) {
	Car.call(this, make, model);
	this.topSpeed=topSpeed;
}
sportsCar.prototype.getTopSpeed=function(){
	return this.topSpeed;
}
SportsCar.prototype.__proto__ = Car.prototype;

function SportsCar(make, model, topSpeed) {}

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
