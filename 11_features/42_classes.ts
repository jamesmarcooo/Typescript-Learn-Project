class Vehicle {
  constructor(public color: string) {}

  protected honk(): void {
    console.log("beep beep");
  }
}

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  private drive(): void {
    console.log("vroom");
  }

  public setDrivingProcess(): void {
    this.drive();
  }
}

const car = new Car(4, "red");
car.setDrivingProcess();
