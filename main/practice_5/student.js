"use strict";
import Person from "../practice_5/Person.js";
class Student extends Person {
  constructor(name, age, klass) {
    super(name, age);
    this.klass = klass;
  }
  introduce() {
    return `${super.introduce()} I am a Student. I am at Class ${this.klass}.`
  }
}
module.exports = Student;