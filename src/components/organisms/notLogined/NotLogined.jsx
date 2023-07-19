import React from "react";
import ButtonForm from "../../molecules/buttonForm/ButtonForm";
import cl from "./notlogined.module.scss";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "../../../utils/hooks/useLocalStorage";
const NotLogined = () => {
  const { storage } = useLocalStorage("profile");
  console.log(storage?.data?.isAuth);
  const navigate = useNavigate();
  return (
    <div className={cl.notlogined}>
      <p className={cl.notlogined__text}>
        {storage.data.isAuth ? (
          <>
            You are logged in.
            <br></br>
            To change your account, go to your profile.
          </>
        ) : (
          <>
            You are not logged in.
            <br></br>
            Enter your username and password
          </>
        )}
      </p>
      {storage?.data?.isAuth ? (
        <ButtonForm
          onClick={() => {
            navigate("/profile");
          }}
        >
          Profile
        </ButtonForm>
      ) : (
        <ButtonForm
          onClick={() => {
            navigate("/login");
          }}
        >
          Login
        </ButtonForm>
      )}
    </div>
  );
};
export default NotLogined;
