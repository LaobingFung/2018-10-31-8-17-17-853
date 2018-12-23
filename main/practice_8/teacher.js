"use strict";
import Person from "../practice_8/person.js"
class Teacher extends Person {
  constructor(id, name, age, klass) {
    super(id, name, age);
    this.klass = klass;
  }
  introduce() {
    return `${super.introduce()} I am a Teacher. I teach ${this.klass? this.klass.getDisplayName() : `No Class`}.`;
  }
}
module.exports = Teacher;