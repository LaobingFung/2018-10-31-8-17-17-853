"use strict";
class Class {
  constructor(number) {
    this.number = number;
  }
  getDisplayName() {
    return `Class ${this.number}`;
  }
  assignLeader(student) {
    if (student.klass.number === this.number) {
      this.leader = student;
      if (this.assignLeaderListener) {
        this.assignLeaderListener.declareAssignLeader(student, this);
      }
    } else {
      console.log("It is not one of us.");
    }
  }
  appendMember(student) {
    student.klass = this;
    if (this.joinListener) {
      this.joinListener.declareJoin(student, this);
    }
  }
  isIn(student) {
    return this.number === student.klass.number;
  }
  registerAssignLeaderListener(teacher) {
    this.assignLeaderListener = teacher;
  }
  registerJoinListener(teacher) {
    this.joinListener = teacher;
  }
}
module.exports = Class;