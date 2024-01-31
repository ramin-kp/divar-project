import api from "../configs/api";
import customToast from "./../utils/toast";

const postPhoneNumber = async (mobile, setStep) => {
  try {
    const sendMobileNumber = await api.post("/auth/send-otp", { mobile });
    setStep(2);
  } catch (error) {
    customToast("error", "مشکلی پیش آمده لطفا بعدا دوباره امتحان کنید");
  }
};

const postCodeNumber = async (code, mobile) => {
  try {
    const sendCode = await api.post("/auth/check-otp", { code, mobile });
    return sendCode;
  } catch (error) {
    return { error };
  }
};
export { postPhoneNumber, postCodeNumber };
