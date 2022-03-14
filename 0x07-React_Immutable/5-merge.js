import { List } from 'immutable';

export default function concatElements(page1, page2) {
    return List(page1, page2);
}

export default function mergeElements(page1, page2) {

}

const element = concatElements(
  ['Apple', 'Banana'],
  ['Alex', 'Carbonell'],
)

console.log(element)
