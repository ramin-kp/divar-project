import React from "react";
import { postCodeNumber } from "../../services/auth";
import { ToastContainer } from "react-toastify";
import customToast from "../../utils/toast";
import { setCookie } from "../../utils/cookie";
import { useNavigate } from "react-router-dom";

function SendOtpForm({ setStep, code, setCode, mobile }) {
  const navigate =useNavigate()
  const onSubmit = async (event) => {
    event.preventDefault();
    if (code !== 5 && !Number(code)) {
      customToast("error", "کد تایید شما نامعتبر است");
      return;
    }
    const { data, status } = await postCodeNumber(code, mobile);
    console.log(data, status);
    if (status === 200) {
      setCookie(data);
      customToast("success", "با موفقیت به حساب کاربری خود وارد شدید.");
      navigate("/")
    } else {
      customToast("error", "مشکلی پیش آمده");
    }
    // console.log(await postCodeNumber(code, mobile));
  };
  return (
    <form onSubmit={onSubmit}>
      <h1>کد تایید خود را وارد کنید.</h1>
      <input
        type="text"
        placeholder="کد تایید را وارد کنید"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <button type="submit">تایید</button>
      <button onClick={() => setStep(1)}>تغییر شماره موبایل</button>
      <ToastContainer />
    </form>
  );
}

export default SendOtpForm;
