import { List, Map } from 'immutable';

export function concatElements(page1, page2) {
  return List(page1.concat(page2));
}

export function mergeElements(page1, page2) {
  return Map({...page1, page2});
}

const element = concatElements(
  ['Apple', 'Banana'],
  ['Alex', 'Carbonell'],
)

const element1 = mergeElements(
  {'Apple': 'Banana'},
  {'Alex': 'Carbonell'},
)

console.log(element);
console.log(element1);
