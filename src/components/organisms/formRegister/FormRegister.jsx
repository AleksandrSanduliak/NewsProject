import React from "react";
import cl from "./FormRegister.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { RegisterUser } from "../../../store/ActionCreators/login";
import { useNavigate } from "react-router-dom";
import Input from "../../molecules/input/Input";
import ButtonForm from "../../molecules/buttonForm/ButtonForm";
import FormTitle from "../../molecules/formTitle/FormTitle";
import { CLEAR_DATA } from "../../../store/actions/loginActions";
import { useForm } from "react-hook-form";
const FormRegister = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.userLogin);
  const registerStatus = useSelector((state) => state.userLogin);
  console.log(registerStatus.statusText);
  const navigate = useNavigate();
  const [data, setData] = React.useState({
    firstname: "",
    lastname: "",
    phone: "",
    email: "",
    login: "",
    password: "",
    isAuth: false,
  });

  const registerForm = (e) => {
    e.preventDefault();
    dispatch(RegisterUser({ id: new Date().getTime(), data }));
  };
  return (
    <div className={cl.formWrapper}>
      <form className={cl.formRegister} onSubmit={registerForm}>
        <div>{registerStatus.statusText || ""}</div>
        <FormTitle>Registation</FormTitle>
        <Input
          type="name"
          required
          value={data.firstname}
          placeholder="First Name"
          onChange={(e) => setData({ ...data, firstname: e.target.value })}
        />
        <Input
          type="name"
          required
          value={data.lastname}
          placeholder="Last name"
          onChange={(e) => setData({ ...data, lastname: e.target.value })}
        />
        <Input
          type="phone"
          required
          value={data.phone}
          placeholder="Mobile"
          onChange={(e) => setData({ ...data, phone: e.target.value })}
        />
        <Input
          type="e-mail"
          required
          value={data.email}
          placeholder="Email"
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />
        <Input
          type="e-mail"
          required
          value={data.login}
          placeholder="Login"
          onChange={(e) => setData({ ...data, login: e.target.value })}
        />
        <Input
          type="current-password"
          required
          value={data.password}
          placeholder="Password"
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />
        <div className={cl.formRegister__buttons}>
          <ButtonForm>Register</ButtonForm>
          <ButtonForm
            onClick={() => {
              navigate("/login");
            }}
          >
            Back to Login!
          </ButtonForm>
        </div>
      </form>
    </div>
  );
};

export default FormRegister;
