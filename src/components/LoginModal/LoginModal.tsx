import ModalWrapper from "../ModalWrapper/ModalWrapper";
import Icon from "../common/Icon";
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
    .min(7, "Too Short!")
    .max(30, "Too Long!")
    .required("Required!"),
  password: Yup.string()
    .min(7, "Too Short!")
    .max(30, "Too Long!")
    .required("Required!"),
});

const LoginModal: React.FC<LoginModalProps> = ({ closeModal }) => {
  const dispatch = useAppDispatch();

  const initialValues: LoginFormValues = {
    email: "",
    password: "",
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
        {
          ({ touched, isSubmitting } = (
            <Form>
              <div>
                <Field
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
                <Field
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password'"
                />
                <ErrorMessage
                  className={css.error}
                  name="email"
                  component="div"
                />
              </div>
              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? <Loader /> : "Log In"}
              </button>
            </Form>
          ))
        }
      </Formik>
    </ModalWrapper>
  );
};

export default LoginModal;
