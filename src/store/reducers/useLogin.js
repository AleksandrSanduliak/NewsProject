import {
  USER_REGISTER,
  USER_LOGIN_ACCES,
  USER_LOGIN_DENIED,
  LOGOUT,
  CLEAR_DATA,
} from "../actions/loginActions";
const initialState = {
  users: [],
  statusText: "",
};
export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_REGISTER:
      state.users.map((users) => {
        console.log(users.data.login, action.payload.data.login);
        if (users.data.login === action.payload.data.login) {
          console.log(state);
          return {
            ...state,
            statusText:
              "A user with this name is already registered. Choose another login",
          };
        }
      });
      return {
        ...state,
        statusText: "",
        users: [...state.users, action.payload],
      };

    case USER_LOGIN_ACCES:
      return {
        ...state,
        users: state.users.map((el) => {
          if (el.data.login === action.payload) {
            el.data.isAuth = true;
            localStorage.setItem("profile", JSON.stringify({ ...el }));
            return el;
          }
          return el;
        }),
      };
    case USER_LOGIN_DENIED:
      return { ...state };
    case LOGOUT:
      action.payload.data.isAuth = false;
      localStorage.setItem("profile", JSON.stringify({ ...action.payload }));
      return {
        ...state,
        users: state.users.map((el) => {
          if (el.id === action.payload.id) {
            return action.payload;
          }
          return el;
        }),
      };
    case CLEAR_DATA:
      return { users: [] };
    default:
      return state;
  }
};
