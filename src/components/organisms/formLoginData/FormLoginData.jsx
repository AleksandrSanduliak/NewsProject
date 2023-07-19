import React from "react";
import cl from "./FormLoginData.module.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  UserLoginDenied,
  UserLoginSucces,
} from "../../../store/ActionCreators/login";
import { useNavigate } from "react-router-dom";
import FormTitle from "../../molecules/formTitle/formTitle";
import Input from "../../molecules/input/input";
import ButtonForm from "../../molecules/buttonForm/ButtonForm";

const FormLoginData = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = React.useState({
    login: "",
    password: "",
  });
  const dispatch = useDispatch();
  const result = useSelector((store) => store.userLogin.users);
  const loginFormData = (e) => {
    e.preventDefault();
    try {
      const CheckData = result.find(
        (user) =>
          user.data.login === userData.login &&
          user.data.password === userData.password
      );
      if (CheckData) {
        dispatch(UserLoginSucces(userData.login));
        navigate("/profile");
      } else {
        alert("error password/login");
      }
    } catch (e) {
      alert("User not found");
    }
  };

  return (
    <div className={cl.formWrapper}>
      <form className={cl.formLogin} onSubmit={loginFormData}>
        <FormTitle>Login</FormTitle>
        <Input
          type="name"
          value={userData.user}
          placeholder="User"
          required
          onChange={(e) => setUserData({ ...userData, login: e.target.value })}
        />
        <Input
          type="current-password"
          value={userData.password}
          required
          placeholder="Password"
          onChange={(e) =>
            setUserData({ ...userData, password: e.target.value })
          }
        />
        <ButtonForm>submit</ButtonForm>
      </form>
      <div className={cl.registerBlock}>
        Don't you have an account?
        <ButtonForm
          onClick={() => {
            navigate("/register");
          }}
        >
          Register
        </ButtonForm>
      </div>
    </div>
  );
};

export default FormLoginData;
