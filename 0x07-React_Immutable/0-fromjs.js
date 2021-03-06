import { fromJS } from 'immutable';

export default function getImmutableObject(object) {
  return fromJS(object);
}

const myList = getImmutableObject({
  fear: true,
  smell: -1033575916.9145899,
  wall: false,
  thing: -914767132,
});

console.log(myList);
