const notification = {
  SUCCESS: 1,
  ERROR: 2,
  WARNING: 3,
};

const notificationData = [
  { type: notification.SUCCESS, color: "green" },
  { type: notification.ERROR, color: "red" },
  { type: notification.WARNING, color: "yellow" },
];

export { notificationData, notification };
