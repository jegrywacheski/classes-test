"use strict";
class Student {
    constructor(name, age, gender = "Female", nationality) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.nationality = nationality;
    }
    getNationality() {
        console.log(this.nationality);
    }
}
class UnderGraduate extends Student {
    constructor(name, age, gender, nationality, batch, gpa) {
        super(name, age, gender, nationality);
        this.batch = batch;
        this.gpa = gpa;
    }
}
const student1 = new UnderGraduate("Alice", 20, "Female", "Canadian", 2025, 3.8);
student1.getNationality();
