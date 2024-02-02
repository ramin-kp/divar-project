import React from "react";
import { Oval } from "react-loader-spinner";

function Loader() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <Oval
        visible={true}
        height="60"
        width="60"
        color="#b91c1c"
        secondaryColor="#ef4444"
        ariaLabel="oval-loading"
        wrapperStyle={{}}
        wrapperClass="#ef4444"
      />
    </div>
  );
}

export default Loader;
