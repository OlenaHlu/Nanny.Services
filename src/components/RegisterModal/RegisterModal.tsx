import ModalWrapper from "../ModalWrapper/ModalWrapper";
import Icon from "../common/Icon";
import Loader from "../Loader/Loader";
import { useState } from "react";
import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";

import css from "./RegisterModal.module.css";

type RegisterModalProps = {
  closeModal: () => void;
};

type RegisterFormValues = {
  name: string;
  email: string;
  password: string;
};

const validationSchema = Yup.object().shape({
  name: Yup.string().min(2).max(20).required("Enter your name please"),
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

const RegisterModal: React.FC<RegisterModalProps> = ({ closeModal }) => {
  const [isVisiblePwd, setIsVisiblePwd] = useState<boolean>(false);

  const initialValues: RegisterFormValues = {
    name: "",
    email: "",
    password: "",
  };

  const toggleVisiblePwd = () => {
    setIsVisiblePwd(!isVisiblePwd);
  };

  function handleSubmit(values: RegisterFormValues) {
    console.log("Form Submitted:", values);
  }

  return (
    <ModalWrapper closeModal={closeModal}>
      <div className={css.modalContent}>
        <span className={css.close} onClick={closeModal}>
          <Icon className={css.icon} iconName="close" />
        </span>
        <h2 className={css.formTitle}>Registration</h2>
        <p className={css.formText}>
          Thank you for your interest in our platform! In order to register, we
          need some information. Please provide us with the following
          information.
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
                    type="name"
                    id="name"
                    name="name"
                    placeholder="Name"
                  />
                  <ErrorMessage
                    className={css.error}
                    name="name"
                    component="div"
                  />
                </div>
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
                {isSubmitting ? <Loader /> : "Sign Up"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </ModalWrapper>
  );
};

export default RegisterModal;
