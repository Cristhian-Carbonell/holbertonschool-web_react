import * as data from '../../../../notifications.json';
import { normalize, schema } from 'normalizr';

const user = new schema.Entity("users");
const message = new schema.Entity("messages", {
  idAttribute: "guid",
});
const notification = new schema.Entity("notifications", {
  author: user,
  context: message,
})

export const normalizedData = normalize(originalData, notification);

export default function getAllNotificationsByUser(userId) {
  const list = data.filter(item => item.author.id === userId);
  const contextObjects = list.map(item => item.context);

  return contextObjects;
}
