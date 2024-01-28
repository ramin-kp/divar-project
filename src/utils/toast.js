import { toast } from "react-toastify";
const customToast = (type, text) => {
  if (type === "success") {
    toast.success(`${text}`, {
      theme: "colored",
    });
  } else if (type === "error") {
    toast.error(`${text}`, {
      theme: "colored",
      pauseOnHover: false,
    });
  }
};

export default customToast;
