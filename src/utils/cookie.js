const setAccessToken = (token) => {
  document.cookie = `accessToken=${token}; max-age=${1 * 24 * 60 * 60}`;
};

const setRefreshToken = (token) => {
    document.cookie = `refreshToken=${token}; max-age=${30 * 24 * 60 * 60}`;
  };


export {setAccessToken,setRefreshToken}
