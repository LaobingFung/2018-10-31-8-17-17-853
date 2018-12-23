"use strict";
import Person from "../practice_11/person.js"
class Teacher extends Person {
  constructor(id, name, age, klasses) {
    super(id, name, age);
    this.klasses = klasses;
  }
  introduce() {
    return `${super.introduce()} I am a Teacher. I teach ${this.klasses? `Class ${this.klasses.map((curklass) => curklass.number).join(', ')}` : `No Class`}.`;
  }
  isTeaching(student) {
    for (let klass of klasses) {
      if (klass.isIn(student)) {
        return true;
      }
    }
    return false;
  }
  declareJoin(student, klass) {
    console.log(`I am ${this.name}. I know ${student.name} has joined ${klass.getDisplayName()}.`);
  }
  declareAssignLeader(student, klass) {
    console.log(`I am ${this.name}. I know ${student.name} become Leader of ${klass.getDisplayName()}.`);
  }
}
module.exports = Teacher;