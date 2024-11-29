import { useEffect } from "react";
import Icon from "../common/Icon";
import css from "./ModalWrapper.module.css";

type ModalWrapperProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const ModalWrapper = ({ isOpen, onClose, children }: ModalWrapperProps) => {
  return;
};

export default ModalWrapper;
