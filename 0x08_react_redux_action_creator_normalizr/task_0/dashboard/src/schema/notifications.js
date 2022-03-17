import * as data from '../../../../notifications.json';

export default function getAllNotificationsByUser(userId) {
  const list = data.filter(item => item.author.id === userId);
  const contextObjects = list.map(item => item.context);

  return contextObjects;
}
