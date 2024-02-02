import "react-toastify/dist/ReactToastify.css";

import { postPhoneNumber } from "../../services/auth";
import customToast from "../../utils/toast";
import { Button, TextField, Typography } from "@mui/material";

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
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "calc(100vh - 210px)",
      }}
    >
      <form
        onSubmit={submitHandler}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          width: "400px",
          height: "400px",
          padding: "20px",
          backgroundColor: "white",
          borderRadius: "10px",
          boxShadow: "rgba(0,0,0,0.5) 0 0 5px",
        }}
      >
        <Typography variant="h5" color="#991b1b" fontWeight="600">
          ورود به حساب کاربری
        </Typography>
        <TextField
          id="outlined-basic"
          label="شماره موبایل"
          variant="outlined"
          color="mainColor"
          value={mobile}
          onChange={(e) => {
            setMobile(e.target.value);
          }}
        />
        <Button variant="contained" color="mainColor" type="submit">
          تأیید
        </Button>
      </form>
    </div>
  );
}

export default CheckOtpForm;
