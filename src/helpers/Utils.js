import { toast } from "react-toastify";

export default class Utils {
  static getUserIconType(userDetails) {
    return userDetails.image ? userDetails.image : userDetails.name.charAt(0);
  }

  showToast() {}
}

export const showToast = (message, type, config = {}) => {
  toast(message, {
    position: "top-center",
    autoClose: true,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    type,
    ...config,
  });
};

export const getFirstChar = (text) => {
  return text.charAt(0);
};
