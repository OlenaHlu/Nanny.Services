import { useState } from "react";
import { useAppSelector } from "../../redux/hooks";

import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import LogoutModal from "../LogoutModal/LogoutModal";
import Icon from "../common/Icon";
import {
  selectIsAuthenticated,
  selectUserName,
} from "../../redux/auth/selectors";

import css from "./AuthNav.module.css";

const AuthNav: React.FC = () => {
  const isAuthenticated = useAppSelector(selectIsAuthenticated);
  const userName = useAppSelector(selectUserName);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState<boolean>(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] =
    useState<boolean>(false);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState<boolean>(false);

  const openLoginModal = () => {
    setIsLoginModalOpen(true);
  };

  const openReisterModal = () => {
    setIsRegisterModalOpen(true);
  };

  const openLogoutModal = () => {
    setIsLogoutModalOpen(true);
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  const closeRegisterModal = () => {
    setIsRegisterModalOpen(false);
  };

  const closeLogoutModal = () => {
    setIsLogoutModalOpen(false);
  };

  const getShortUserName = (name: string): string =>
    name.length > 10 ? `${name.slice(0, 10)}..` : name;

  return (
    <div className={css.authContainer}>
      {!isAuthenticated && (
        <>
          <button className={css.logBtn} onClick={openLoginModal}>
            Log In
          </button>
          <button className={css.regBtn} onClick={openReisterModal}>
            Registration
          </button>
        </>
      )}

      {isAuthenticated && (
        <div className={css.authContainer}>
          <div className={css.authContent}>
            <span className={css.iconContainer}>
              <Icon className={css.userIcon} iconName="mdi_user" />
            </span>
            <p className={css.nameUser}>{getShortUserName(userName)}</p>
          </div>
          <button className={css.authBtn} onClick={openLogoutModal}>
            Log Out
          </button>
        </div>
      )}

      {isLoginModalOpen && <LoginModal closeModal={closeLoginModal} />}
      {isRegisterModalOpen && <RegisterModal closeModal={closeRegisterModal} />}
      {isLogoutModalOpen && <LogoutModal closeModal={closeLogoutModal} />}
    </div>
  );
};

export default AuthNav;
