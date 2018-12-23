"use strict";
import Person from "../practice_10/person.js"
class Student extends Person {
  constructor(id, name, age, klass) {
    super(id, name, age);
    this.klass = klass;
  }
  introduce() {
    return `${super.introduce()} I am a Student. I am ${this.klass.leader === this ? `Leader of ${this.klass.getDisplayName()}` :`at ${this.klass.getDisplayName()}`}.`
  }
}
module.exports = Student;
