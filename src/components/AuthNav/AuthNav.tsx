import { useState } from "react";
import css from "./AuthNav.module.css";
import clsx from "clsx";

const AuthNav = () => {
  return (
    <div className={css.authContainer}>
      <button className={css.logBtn}>Log In</button>
      <button className={css.regBtn}>Registration</button>
      {/* <button className={css.authBtn}>Log Out</button> */}
    </div>
  );
};

export default AuthNav;
