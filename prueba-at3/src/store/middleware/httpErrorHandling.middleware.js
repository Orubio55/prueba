import { isRejectedWithValue } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const queryErrorHandler = () => (next) => (action) => {
  if (isRejectedWithValue(action)) {
    toast.error(
      `${action?.error?.message} (${action.payload.status}) - ${action.payload.data.error}`,
      {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 3000,
      }
    );
  }
  return next(action);
};
