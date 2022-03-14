import { fromJS } from 'immutable';

export default function getImmutableObject(object) {
    const myList = fromJS(object);
    return (myList);
}

getImmutableObject({
    fear: true,
    smell: -1033575916.9145899,
    wall: false,
    thing: -914767132
})
