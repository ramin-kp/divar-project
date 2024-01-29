import React from "react";
import { postCodeNumber } from "../../services/auth";
import { ToastContainer } from "react-toastify";

function SendOtpForm({ setStep, code, setCode, mobile }) {
  const onSubmit = async (event) => {
    event.preventDefault();
    await postCodeNumber(code, mobile);
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
