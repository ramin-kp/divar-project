import api from "../configs/api";
import customToast from "../utils/toast";

const postPhoneNumber = async (mobile, setStep) => {
  try {
    const sendMobileNumber = await api.post("/auth/send-otp", { mobile });
    console.log(sendMobileNumber);
    setStep(2);
  } catch (error) {
    customToast("error", "مشکلی پیش آمده لطفا بعدا دوباره امتحان کنید");
  }
};

const postCodeNumber = async (code, mobile) => {
  try {
    const sendCode = await api.post("/auth/check-otp", { code, mobile });
    console.log(sendCode);
    if (sendCode.status === 200) {
      customToast("success", "با موفقیت وارد شدید");
    } else {
      customToast("error", "مدت زمان کد تایید به پایان رسیده است");
    }
  } catch (error) {
    customToast("error", "لطفا بعدا دوباره امتحان کنید");
  }
};
export { postPhoneNumber, postCodeNumber };
