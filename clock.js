//
// This is only a SKELETON file for the 'Clock' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const TO_MILISECONDS = 60000;
// 60 (quantite of seconds in a minute) * 1000 (to get in the miliseconds)

export class Clock {
  constructor(hour, minutes = 0) {
   this.clock = new Date((hour * 60 + minutes) * TO_MILISECONDS)  
  }

  toString() {
    return this.clock.toUTCString().slice(17,22);
  }

  plus(minutes) {
    this.clock = new Date(this.clock.getTime() + (minutes * TO_MILISECONDS));
    return this;
  }

  minus(minutes) {
    this.clock = new Date(this.clock.getTime() - (minutes * TO_MILISECONDS));
    return this;
  }

  equals(clock) {
   return this.toString() == clock.toString();
  }
}
