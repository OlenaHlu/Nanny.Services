import { useState } from "react";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import LogoutModal from "../LogoutModal/LogoutModal";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { selectIsAuthenticated } from "../../redux/auth/selectors";
import css from "./AuthNav.module.css";
// import clsx from "clsx";

const AuthNav: React.FC = () => {
  const dispatch = useAppDispatch();
  const isAuthenticated = useAppSelector(selectIsAuthenticated);
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
        <button className={css.authBtn} onClick={openLogoutModal}>
          Log Out
        </button>
      )}

      {isLoginModalOpen && <LoginModal closeModal={closeLoginModal} />}
      {isRegisterModalOpen && <RegisterModal closeModal={closeRegisterModal} />}
      {isLogoutModalOpen && <LogoutModal closeModal={closeLogoutModal} />}
    </div>
  );
};

export default AuthNav;
