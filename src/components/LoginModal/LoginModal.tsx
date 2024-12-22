import ModalWrapper from "../ModalWrapper/ModalWrapper";
import Icon from "../common/Icon";
import { useState } from "react";
import { loginUser } from "../../redux/auth/operations";
import { Field, Form, Formik, ErrorMessage } from "formik";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import Loader from "../Loader/Loader";
import { useNavigate } from "react-router-dom";
import {
  selectIsAuthenticated,
  selectAuthError,
} from "../../redux/auth/selectors";

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
    .required("Email is Required"),
  password: Yup.string()
    .min(7, "Too Short")
    .max(30, "Too Long")
    .required("Password is Required"),
});

const LoginModal: React.FC<LoginModalProps> = ({ closeModal }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [isVisiblePwd, setIsVisiblePwd] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const isAuthenticated = useAppSelector(selectIsAuthenticated);
  const authError = useAppSelector(selectAuthError);

  const initialValues: LoginFormValues = {
    email: "",
    password: "",
  };

  const toggleVisiblePwd = () => {
    setIsVisiblePwd(!isVisiblePwd);
  };

  const handleSubmit = async (values: LoginFormValues) => {
    setIsSubmitting(true);
    try {
      await dispatch(loginUser(values)).unwrap();
      console.log("Form Submitted:", values);
      closeModal();
      navigate("/favorites");
    } catch (error) {
      console.error("Login failed:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <ModalWrapper closeModal={closeModal}>
      <div className={css.modalContent}>
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
              <button
                className={css.formBtn}
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? <Loader /> : "Log In"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </ModalWrapper>
  );
};

export default LoginModal;
