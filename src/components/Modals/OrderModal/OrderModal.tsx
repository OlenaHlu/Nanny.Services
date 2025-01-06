import ModalWrapper from "../ModalWrapper/ModalWrapper";
import { useState, useRef } from "react";
import { Field, Form, Formik, ErrorMessage, FormikHelpers } from "formik";
import Icon from "../../common/Icon";

import * as Yup from "yup";

import css from "./OrderModal.module.css";

type OrderModalProps = {
  closeModal: () => void;
  name: string;
  image: string;
};

type OrderModalValues = {
  address: string;
  phone: string;
  age: string;
  time: string;
  email: string;
  parentsName: string;
  comment: string;
};

const validationOrderSchema = Yup.object().shape({
  address: Yup.string()
    .min(5, "Address must be at least 5 characters long")
    .required("Address is Required"),
  phone: Yup.string()
    .matches(/^[0-9+]{10,15}$/, "Invalid phone number")
    .required("Phone is Required"),
  age: Yup.number()
    .typeError("Age must be a number")
    .max(100, "Maximum age is 15")
    .required("Age is required"),
  time: Yup.string().required("Time is required"),
  email: Yup.string()
    .email("Invalid email format")
    .min(7, "Too Short")
    .max(30, "Too Long")
    .required("Email is required"),
  parentsName: Yup.string()
    .min(2, "Name must be at least 2 characters long")
    .required("Name is required"),
  comment: Yup.string().max(500, "Comment can be up to 500 characters"),
});

const OrderModal: React.FC<OrderModalProps> = ({ name, image, closeModal }) => {
  const [isTimeOpen, setIsTimeOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const initialValues: OrderModalValues = {
    address: "",
    phone: "",
    age: "",
    time: "",
    email: "",
    parentsName: "",
    comment: "",
  };

  const times = [
    "09 : 00",
    "09 : 30",
    "10 : 00",
    "10 : 30",
    "11 : 00",
    "11 : 30",
    "12 : 00",
  ];

  const toggleDropdown = () => setIsTimeOpen((prev) => !prev);

  function handleSubmit(
    values: OrderModalValues,
    { resetForm }: FormikHelpers<OrderModalValues>
  ) {
    console.log("Form Submitted:", values);
    resetForm();
  }

  return (
    <ModalWrapper closeModal={closeModal}>
      <div className={css.modalContent}>
        <span className={css.close} onClick={closeModal}>
          <Icon className={css.icon} iconName="close" />
        </span>
        <h2 className={css.formTitle}>Make an appointment with a babysitter</h2>
        <p className={css.formText}>
          Arranging a meeting with a caregiver for your child is the first step
          to creating a safe and comfortable environment. Fill out the form
          below so we can match you with the perfect care partner.
        </p>
        <div className={css.nannyContent}>
          <img className={css.image} src={image} alt="avatar" />
          <div>
            <p className={css.nannyText}>Your nanny</p>
            <h4 className={css.nannyName}>{name}</h4>
          </div>
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationOrderSchema}
          onSubmit={handleSubmit}
        >
          {({ setFieldValue }) => (
            <Form>
              <div className={css.upperContainer}>
                <div className={css.leftUppContainer}>
                  <div className={css.inputDiv}>
                    <Field
                      className={css.upperInput}
                      type="text"
                      name="address"
                      placeholder="Address"
                    />
                    <ErrorMessage
                      className={css.error}
                      name="address"
                      component="div"
                    />
                  </div>
                  <div className={css.inputDiv}>
                    <Field
                      className={css.upperInput}
                      type="text"
                      name="age"
                      placeholder="Child's age"
                    />
                    <ErrorMessage
                      className={css.error}
                      name="age"
                      component="div"
                    />
                  </div>
                </div>
                <div className={css.rightUppContainer}>
                  <div className={css.inputDiv}>
                    <Field
                      className={css.upperInput}
                      type="text"
                      name="phone"
                      placeholder="+380"
                    />
                    <ErrorMessage
                      className={css.error}
                      name="phone"
                      component="div"
                    />
                  </div>
                  <div className={css.inputTime} ref={dropdownRef}>
                    <Field
                      className={css.upperInput}
                      type="text"
                      name="time"
                      placeholder="00:00"
                      readOnly
                    />
                    <button
                      className={css.iconBtn}
                      type="button"
                      onClick={toggleDropdown}
                    >
                      <Icon className={css.iconClock} iconName="clock" />
                    </button>

                    {isTimeOpen && (
                      <div className={css.dropDown}>
                        <p className={css.meeting}>Meeting time</p>
                        <ul className={css.timeList}>
                          {times.map((time) => (
                            <li
                              key={time}
                              className={css.timeItem}
                              onClick={() => {
                                setFieldValue("time", time);
                                setIsTimeOpen(false);
                              }}
                            >
                              {time}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    <ErrorMessage
                      className={css.error}
                      name="time"
                      component="div"
                    />
                  </div>
                </div>
              </div>
              <div className={css.lowerContainer}>
                <div className={css.inputDiv}>
                  <Field
                    className={css.lowerInput}
                    type="text"
                    name="email"
                    placeholder="Email"
                  />
                  <ErrorMessage
                    className={css.error}
                    name="email"
                    component="div"
                  />
                </div>
                <div className={css.inputDiv}>
                  <Field
                    className={css.lowerInput}
                    type="text"
                    name="parentsName"
                    placeholder="Father's or mother's name"
                  />
                  <ErrorMessage
                    className={css.error}
                    name="name"
                    component="div"
                  />
                </div>
                <div className={css.inputDiv}>
                  <Field
                    className={css.textarea}
                    type="text"
                    as="textarea"
                    name="comment"
                    placeholder="Comment"
                  />
                  <ErrorMessage
                    className={css.error}
                    name="comment"
                    component="div"
                  />
                </div>
              </div>
              <button className={css.sendBtn} type="submit">
                Send
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </ModalWrapper>
  );
};

export default OrderModal;
