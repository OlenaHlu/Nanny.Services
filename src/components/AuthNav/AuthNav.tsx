import { useState } from "react";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import css from "./AuthNav.module.css";
// import clsx from "clsx";

const AuthNav: React.FC = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState<boolean>(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] =
    useState<boolean>(false);

  const openLoginModal = () => {
    setIsLoginModalOpen(true);
  };

  const openReisterModal = () => {
    setIsRegisterModalOpen(true);
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  const closeRegisterModal = () => {
    setIsRegisterModalOpen(false);
  };

  return (
    <div className={css.authContainer}>
      <button className={css.logBtn} onClick={openLoginModal}>
        Log In
      </button>
      <button className={css.regBtn} onClick={openReisterModal}>
        Registration
      </button>
      {/* <button className={css.authBtn}>Log Out</button> */}
      {isLoginModalOpen && <LoginModal closeModal={closeLoginModal} />}
      {isRegisterModalOpen && <RegisterModal closeModal={closeRegisterModal} />}
    </div>
  );
};

export default AuthNav;
