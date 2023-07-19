import React from "react";
import FormLoginData from "../organisms/formLoginData/FormLoginData";
import useLocalStorage from "../../utils/hooks/useLocalStorage";
import NotLogined from "../organisms/notLogined/NotLogined";
const Login = () => {
  const { storage } = useLocalStorage("profile");
  return (
    <>
      {storage?.data?.isAuth ? (
        <NotLogined isLogin={false} />
      ) : (
        <FormLoginData />
      )}
    </>
  );
};

export default Login;
