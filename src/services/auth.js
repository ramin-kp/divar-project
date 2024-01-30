import api from "../configs/api";
import setCookie from "../utils/cookie";
import customToast from "./../utils/toast";

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
      setCookie(sendCode.data);
      customToast("success", "با موفقیت وارد شدید");
    }
  } catch (error) {
    customToast("error", " مدت زمان کد تایید شما به پایان رسیده است");
  }
};
export { postPhoneNumber, postCodeNumber };
