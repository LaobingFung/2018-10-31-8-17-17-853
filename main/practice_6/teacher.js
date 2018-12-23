"use strict";
import Person from "../practice_5/person.js";
class Teacher extends Person {
  constructor(name, age, klass) {
    super(name, age);
    this.klass = klass;
  }
  introduce() {
    return `${super.introduce()} I am a Teacher. I teach ${this.klass? `Class ${this.klass}` : `No Class`}.`;
  }
}
module.exports = Teacher;