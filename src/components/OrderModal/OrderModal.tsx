import ModalWrapper from "../ModalWrapper/ModalWrapper";
import { useState, useRef, useEffect } from "react";
import { Field, Form, Formik, ErrorMessage } from "formik";
import Icon from "../common/Icon";

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
    .matches(/^[0-9+]{10,15}$/)
    .required("Phone is Required"),
  age: Yup.number()
    .typeError("Age must be a number")
    .max(100, "Maximum age is 15")
    .required("Age is required"),
  time: Yup.string()
    .matches(/^([01]\d|2[0-3]):([0-5]\d)$/, "Time must be in hh:mm format")
    .required("Time is required"),
  email: Yup.string()
    .email("Invalid email format")
    .min(7, "Too Short")
    .max(30, "Too Long")
    .required("Email is required"),
  name: Yup.string()
    .min(2, "Name must be at least 2 characters long")
    .required("Name is required"),
  comment: Yup.string().max(500, "Comment can be up to 500 characters"),
});

const OrderModal: React.FC<OrderModalProps> = ({ name, image, closeModal }) => {
  const [isTimeOpen, setIsTimeOpen] = useState(false);
  //   const [selectedTime, setSelectedTime] = useState("00:00");
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

  const times = ["09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00"];

  const toggleDropdown = () => setIsTimeOpen((prev) => !prev);

  //   const handleTimesClick = (time: string) => {
  //     setSelectedTime(time);
  //     setIsTimeOpen(false);
  //   };

  function handleSubmit(values: OrderModalValues) {
    console.log("Form Submitted:", values);
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
                  <Field
                    className={css.UpperInput}
                    type="text"
                    name="address"
                    placeholder="Address"
                  />
                  <ErrorMessage
                    className={css.error}
                    name="address"
                    component="div"
                  />
                  <Field
                    className={css.UpperInput}
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
                <div className={css.rightUppContainer}>
                  <Field
                    className={css.UpperInput}
                    type="text"
                    name="phone"
                    placeholder="+380"
                  />
                  <ErrorMessage
                    className={css.error}
                    name="phone"
                    component="div"
                  />
                  <div className={css.inputTime} ref={dropdownRef}>
                    <Field
                      className={css.UpperInput}
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
                        <ul>
                          {times.map((time) => (
                            <li
                              key={time}
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
                <Field
                  className={css.lowerInput}
                  type="text"
                  name="name"
                  placeholder="Father's or mother's name"
                />
                <ErrorMessage
                  className={css.error}
                  name="name"
                  component="div"
                />
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
              <button className={css.sendBtn}>Send</button>
            </Form>
          )}
        </Formik>
      </div>
    </ModalWrapper>
  );
};

export default OrderModal;
