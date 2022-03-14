import { Seq } from 'immutable';

export default function printBestStudents(object) {
  let firstName;
  let lastName;

  Seq(object)
  .filter(value => value.score < 70)
  .map((value) => firstName = value.firstName.toUpperCase()).toObject();

  Seq(object)
  .filter(value => value.score < 70)
  .map((value) => lastName = value.lastName.toUpperCase()).toObject();

  console.log(firstName, lastName);
}

const grades = {
  1: {
    score: 69,
    firstName: 'guillaume',
    lastName: 'salva',
  }
};

printBestStudents(grades);
