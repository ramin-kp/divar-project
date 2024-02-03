import { postCodeNumber } from "../../services/auth";
import customToast from "../../utils/toast";
import { setCookie } from "../../utils/cookie";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getProfile } from "../../services/user";
import { Box, Button, TextField, Typography } from "@mui/material";

function SendOtpForm({ setStep, code, setCode, mobile }) {
  const navigate = useNavigate();
  const { refetch } = useQuery(["profile"], getProfile);
  const onSubmit = async (event) => {
    event.preventDefault();
    if (code !== 5 && !Number(code)) {
      customToast("error", "کد تایید شما نامعتبر است");
      return;
    }

    const { data, status } = await postCodeNumber(code, mobile);

    if (status === 200) {
      customToast("success", "با موفقیت به حساب کاربری خود وارد شدید.");
      setCookie(data);
      navigate("/");

      refetch();
    } else {
      customToast("error", "مشکلی پیش آمده");
    }
  };
  return (
    <Box
      component="div"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "calc(100vh - 210px)",
      }}
    >
      <form
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
        onSubmit={onSubmit}
      >
        <Typography variant="h5" color="#991b1b" fontWeight="600">
          کد تایید خود را وارد کنید
        </Typography>

        <TextField
          id="outlined-basic"
          label="کد تایید"
          variant="outlined"
          color="mainColor"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        <Box component="div">
          <Button
            variant="contained"
            color="mainColor"
            type="submit"
            sx={{ mr: "30px" }}
          >
            تأیید
          </Button>
          <Button
            variant="contained"
            color="mainColor"
            onClick={() => setStep(1)}
          >
            تغییر شماره موبایل
          </Button>
        </Box>
      </form>
    </Box>
  );
}

export default SendOtpForm;
