import React from "react";
import { useDispatch } from "react-redux";

import { logoutUser } from "../../../store/ActionCreators/login";
import male from "../../../assets/male.webp";
import cl from "./profile.module.scss";
import ButtonForm from "../../molecules/buttonForm/ButtonForm";
import useLocalStorage from "../../../utils/hooks/useLocalStorage";
import NotLogined from "../../organisms/notLogined/NotLogined";
const Profile = () => {
  const dispatch = useDispatch();
  const { storage, setStorage } = useLocalStorage("profile");
  const logout = () => {
    setStorage(storage.data.isAuth === false);
    dispatch(logoutUser(storage));
  };
  return (
    <div>
      {storage?.data?.isAuth ? (
        <div className={cl.userProfile__wrapper}>
          Your Welcome {storage.data.login}!
          <div className={cl.userProfile}>
            <img
              className={cl.userProfile__img}
              src={male}
              alt="User Profile"
            />
            <ul className={cl.userProfile__list}>
              {Object.keys(storage.data)
                .slice(0, -3)
                .map(function (key) {
                  return (
                    <li className={cl.userProfile__item} key={key}>
                      <span>{key}:</span> {storage.data[key]}
                    </li>
                  );
                })}
            </ul>
          </div>
          <ButtonForm onClick={logout}>Logout</ButtonForm>
        </div>
      ) : (
        <NotLogined isLogin={true} />
      )}
    </div>
  );
};

export default Profile;
