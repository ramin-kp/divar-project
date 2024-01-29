import { toast } from "react-toastify";
const customToast = (type, text) => {
  if (type === "success") {
    toast.success(`${text}`, {
      theme: "colored",
      pauseOnHover: false,
      pauseOnFocusLoss: false,
    });
  } else if (type === "error") {
    toast.error(`${text}`, {
      theme: "colored",
      pauseOnHover: false,
      pauseOnFocusLoss: false,
    });
  }
};

export default customToast;
