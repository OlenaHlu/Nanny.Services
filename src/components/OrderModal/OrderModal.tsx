import ModalWrapper from "../ModalWrapper/ModalWrapper";
import { useState } from "react";
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
  addres: string;
  phone: string;
  age: number;
  time: string;
  email: string;
  parentsName: string;
  comment: string;
};

const OrderModal: React.FC<OrderModalProps> = ({ name, image, closeModal }) => {
  const initialValues: OrderModalValues = {
    addres: "",
    phone: "",
    age: 0,
    time: "",
    email: "",
    parentsName: "",
    comment: "",
  };

  return (
    <ModalWrapper closeModal={closeModal}>
      <div className={css.modalContent}>
        <span className={css.close} onClick={closeModal}>
          <Icon className={css.icon} iconName="close" />
        </span>
        <h2 className={css.formTitle}>Make an appointment with a babysitter</h2>
        <p>
          Arranging a meeting with a caregiver for your child is the first step
          to creating a safe and comfortable environment. Fill out the form
          below so we can match you with the perfect care partner.
        </p>
        <ul>
          <li>
            <img src={image} alt="avatar" />
          </li>
          <li>
            <p>Your nanny</p>
            <h4>{name}</h4>
          </li>
        </ul>
        <Formik></Formik>
      </div>
    </ModalWrapper>
  );
};

export default OrderModal;
