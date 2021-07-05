import React from "react";
import { NotificationContext } from "../notification/NotificationProvider";

function useNotify() {
  return React.useContext(NotificationContext);
}

export default useNotify;
