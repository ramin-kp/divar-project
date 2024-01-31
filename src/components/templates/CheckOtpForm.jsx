import "react-toastify/dist/ReactToastify.css";

import { postPhoneNumber } from "../../services/auth";
import customToast from "../../utils/toast";

function CheckOtpForm({ mobile, setMobile, setStep }) {
  const submitHandler = async (event) => {
    event.preventDefault();
    if (mobile.length !== 11) {
      customToast("error", "شماره موبایل خود را به صورت صحیح وارد کنید");
      return;
    } else {
      await postPhoneNumber(mobile, setStep);
    }
  };
  return (
    <>
      <form onSubmit={submitHandler}>
        <h1>ورود به حساب کاربری</h1>
        <input
          type="text"
          placeholder="شماره موبایل  خود را وارد"
          value={mobile}
          onChange={(e) => {
            setMobile(e.target.value);
          }}
        />
        <button type="submit">تأیید</button>
      </form>
    </>
  );
}

export default CheckOtpForm;
