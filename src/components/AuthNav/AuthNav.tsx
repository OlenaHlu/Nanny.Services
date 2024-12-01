import { useState } from "react";
import LoginModal from "../LoginModal/LoginModal";
import css from "./AuthNav.module.css";
import clsx from "clsx";

const AuthNav: React.FC = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState<boolean>(false);

  const openLoginModal = () => {
    setIsLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };
  return (
    <div className={css.authContainer}>
      <button className={css.logBtn} onClick={openLoginModal}>
        Log In
      </button>
      <button className={css.regBtn}>Registration</button>
      {/* <button className={css.authBtn}>Log Out</button> */}
      {isLoginModalOpen && <LoginModal closeModal={closeLoginModal} />}
    </div>
  );
};

export default AuthNav;
