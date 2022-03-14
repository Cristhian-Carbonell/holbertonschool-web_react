import { Seq } from 'immutable';

export default function printBestStudents(object) {
  let obj;

  Seq(object)
    .filter(value => value.score > 70)
    .map((value) => obj = value).toObject();

  const firstName = obj['firstName'].toUpperCase();
  const lastName = obj['lastName'].toUpperCase();

  console.log(firstName, lastName);
}

const grades = {
  1: {
    score: 99,
    firstName: 'guillaume',
    lastName: 'salva',
  },
};

printBestStudents(grades);
