export interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [propName: string]: any;
}

export interface Directors extends Teacher {
    numberOfReports: number;
}

export interface printTeacher {
    (firstName: string, lastName: string): string;
}
let print: printTeacher;
print = function (firstName: string, lastName: string): string {
    return `${firstName[0]}. ${lastName}`
}

export interface StudentConstructor {
    new(firstName: string, lastName: string): StudentClassInterface;
}

export interface StudentClassInterface {
    displayName(): string;
    workOnHomework(): string;
}

export class StudentClass {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework() {
        return 'Currently working';
    }

    displayName() {
        return this.firstName;
    }
}