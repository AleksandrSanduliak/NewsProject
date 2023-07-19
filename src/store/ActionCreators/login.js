import {
  USER_REGISTER,
  USER_LOGIN_ACCES,
  USER_LOGIN_DENIED,
  LOGOUT,
} from "../actions/loginActions";

export const UserLoginSucces = (data) => {
  return {
    type: USER_LOGIN_ACCES,
    payload: data,
  };
};

export const UserLoginDenied = () => {
  return {
    type: USER_LOGIN_DENIED,
  };
};

export const RegisterUser = (data) => {
  return {
    type: USER_REGISTER,
    payload: data,
  };
};

export const logoutUser = (data) => {
  return {
    type: LOGOUT,
    payload: data,
  };
};
