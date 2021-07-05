import React, { useCallback, useState } from "react";
import { v4 as uuid_v4 } from "uuid";
import styled from "styled-components";
import useDomElement from "../hooks/useDomElement";
import Notification from "../components/Notification";
import reactDOM from "react-dom";

const NotificationsContainer = styled.div`
  position: fixed;
  top: 16px;
  right: 16px;
  pointer-events: none;
`;

export const NotificationContext = React.createContext({});

const useNotifications = () => {
  const [notifications, setNotification] = useState([]);

  const notify = useCallback(({ type, title, description, onMore }) => {
    // TODO: onClose
    const id = uuid_v4();

    const removeNotification = () => {
      const newNotification = notifications.filter(
        (notification) => notification.id !== id
      );
      setNotification(newNotification);
    };
    const newNotification = {
      id,
      type,
      title,
      description,
      onMore,
      onClose: removeNotification,
    };

    setNotification((notifications) => [...notifications, newNotification]);
    setTimeout(removeNotification, 2000);
  }, []);

  return { notify, notifications };
};

const NotificationProvider = ({ children }) => {
  const notificationRoot = useDomElement();

  const { notify, notifications } = useNotifications();

  return (
    <>
      <NotificationContext.Provider value={notify}>
        {children}
      </NotificationContext.Provider>

      {notificationRoot &&
        reactDOM.createPortal(
          <NotificationsContainer>
            {notifications.map((notification) => (
              <Notification key={notification.id} {...notification} />
            ))}
          </NotificationsContainer>,
          notificationRoot
        )}
    </>
  );
};

export default NotificationProvider;
