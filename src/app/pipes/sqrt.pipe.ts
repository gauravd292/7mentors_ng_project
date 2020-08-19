import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sqrt',
})
export class SqrtPipe implements PipeTransform {
  transform(value) {
    return Math.sqrt(value);
  }
}

// class Car {
//   props: 'data';

//   start() {
//     // logic
//   }

//   speed() {
//     // logic 200km/hr
//   }

//   move() {
//     // logic
//   }

//   stop() {
//     // logic
//   }
// }

// class highSpeedCars {
//   start() {}

//   speed() {}

//   move() {}

//   stop() {}
// }

// class TATA extends Car {
//   xyz() {}
// }

// class forOne implements highSpeedCars {
//   speed() {
//     // logic
//   }
// }
