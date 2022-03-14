import { Map, is } from 'immutable';

export default function areMapsEqual(map1, map2) {
  const Object1 = Map(map1);
  const Object2 = Map(map2);
  return is(Object1, Object2);
}

const map1 = new Map(
  {
    firstName: 'Guillaume',
    lastName: 'Salva',
  },
);
const map2 = new Map(
  {
    firstName: 'Guillaume',
    lastName: 'Salva',
  },
);

console.log(areMapsEqual(map1, map2));
