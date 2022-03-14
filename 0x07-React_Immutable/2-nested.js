import { Map } from 'immutable';

export default function accessImmutableObject(object, array) {
    const map = Map(object).get(array[0]);
    return map[array[1]];
}

console.log(accessImmutableObject({
    name: {
         first: "Guillaume",
         last: "Salva",
    }
}, ['name', 'first']));
