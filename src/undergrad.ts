class Student {
    name: string;
    age: number;
    gender: string;
    nationality: string;

    constructor(
        name: string,
        age: number,
        gender: string = "Female",
        nationality: string,
    ) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.nationality = nationality;
    }

    getNationality() {
        console.log(this.nationality);
    }
}

class UnderGraduate extends Student implements IUndergrad {
    batch: number;
    gpa: number;

    constructor(
        name: string,
        age: number,
        gender: string,
        nationality: string,
        batch: number,
        gpa: number,
    ) {
        super(name, age, gender, nationality);
        this.batch = batch;
        this.gpa = gpa;
    }
}

interface IUndergrad {
    name: string;
    age: number;
    gender: string;
    nationality: string;
    batch: number;
    gpa: number;
}

const student1 = new UnderGraduate(
    "Alice",
    20,
    "Female",
    "Canadian",
    2025,
    3.8,
);
student1.getNationality();
