import { useEffect } from "react";
import Icon from "../common/Icon";
import css from "./ModalWrapper.module.css";

type ModalWrapperProps = {
  closeModal: () => void;
  children: React.ReactNode;
};

const ModalWrapper: React.FC<ModalWrapperProps> = ({
  closeModal,
  children,
}: ModalWrapperProps) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [closeModal]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <div className={css.modal} onClick={handleBackdropClick}>
      <div className={css.modalContent}> {children}</div>
    </div>
  );
};

export default ModalWrapper;
