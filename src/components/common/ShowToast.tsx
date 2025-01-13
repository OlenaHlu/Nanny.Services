import { toast } from "react-toastify";

type ShowToastProps = {
  message: string;
  type: "success" | "error";
};

const ShowToast = ({ message, type }: ShowToastProps): void => {
  toast(message, {
    position: "bottom-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: type === "success" ? "light" : "colored",
    type,
  });
};

export default ShowToast;
