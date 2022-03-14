import { Map } from 'immutable';

export default function accessImmutableObject(object, array) {
  return Map(object).getIn([array[0], array[1]]);
}

accessImmutableObject({
  name: {
    first: "Guillaume",
    last: "Salva",
  }
}, ['name', 'first']);
