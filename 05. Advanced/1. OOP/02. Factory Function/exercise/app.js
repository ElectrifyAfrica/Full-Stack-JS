function vehicle(type, make, model, year) {
  return{
    type,
    make,
    model,
    year,
    vehicleInfo: function () {
      console.log(`This is a ${this.year} ${this.make} ${this.model} ${this.type} vehicle.`);
    },
  };
};

const car1 = vehicle("SUV", "Acura", "RDX", "2018");
console.log(car1);
car1.vehicleInfo();