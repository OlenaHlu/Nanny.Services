import ModalWrapper from "../ModalWrapper/ModalWrapper";
import Icon from "../common/Icon";
import { useState } from "react";
import { Field, Form, Formik, ErrorMessage } from "formik";
import { useAppDispatch } from "../../redux/hooks";
import Loader from "../Loader/Loader";

import * as Yup from "yup";

import css from "./LoginModal.module.css";

type LoginModalProps = {
  closeModal: () => void;
};
type LoginFormValues = {
  email: string;
  password: string;
};

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email format")
    .min(7, "Too Short")
    .max(30, "Too Long")
    .required(" Email Required"),
  password: Yup.string()
    .min(7, "Too Short")
    .max(30, "Too Long")
    .required("Password Required"),
});

const LoginModal: React.FC<LoginModalProps> = ({ closeModal }) => {
  // const dispatch = useAppDispatch();
  const [isVisiblePwd, setIsVisiblePwd] = useState<boolean>(false);

  const initialValues: LoginFormValues = {
    email: "",
    password: "",
  };

  const toggleVisiblePwd = () => {
    setIsVisiblePwd(!isVisiblePwd);
  };

  function handleSubmit(values: LoginFormValues) {
    console.log("Form Submitted:", values);
  }

  return (
    <ModalWrapper closeModal={closeModal}>
      <span className={css.close} onClick={closeModal}>
        <Icon className={css.icon} iconName="close" />
      </span>
      <h2 className={css.formTitle}>Log In</h2>
      <p className={css.formText}>
        Welcome back! Please enter your credentials to access your account and
        continue your babysitter search.
      </p>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className={css.formValues}>
              <div>
                <Field
                  className={css.input}
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                />
                <ErrorMessage
                  className={css.error}
                  name="email"
                  component="div"
                />
              </div>
              <div>
                <div style={{ position: "relative" }}>
                  <Field
                    className={css.input}
                    type={isVisiblePwd ? "text" : "password"}
                    id="password"
                    name="password"
                    placeholder="Password"
                  />
                  <span
                    onClick={toggleVisiblePwd}
                    className={css.iconContainer}
                  >
                    {isVisiblePwd ? (
                      <Icon className={css.iconPwd} iconName="eye" />
                    ) : (
                      <Icon className={css.iconPwd} iconName="eye-off" />
                    )}
                  </span>
                </div>
                <ErrorMessage
                  className={css.error}
                  name="password"
                  component="div"
                />
              </div>
            </div>
            <button className={css.formBtn} type="submit">
              {isSubmitting ? <Loader /> : "Log In"}
            </button>
          </Form>
        )}
      </Formik>
    </ModalWrapper>
  );
};

export default LoginModal;
