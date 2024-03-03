class Car {
    constructor(carname, speed) {
      this.carname = carname;
      this._speed = 1234;
    }
  
    // get
    get speedCar() {
      return this._speed;
    }
  
    present() {
      return "I have a " + this.carname;
    }
  }
  
  class Model extends Car {
    constructor(carname, model, speed) {
      super(carname, speed);
      this.model = model;
    }
    show() {
      return console.log(super.present() + ", it is a " + this.model);
    }
  }