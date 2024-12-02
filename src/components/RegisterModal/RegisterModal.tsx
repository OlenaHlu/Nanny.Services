import ModalWrapper from "../ModalWrapper/ModalWrapper";
import Icon from "../common/Icon";
import css from "./RegisterModal.module.css";

type RegisterModalProps = {
  closeModal: () => void;
};

const RegisterModal: React.FC<RegisterModalProps> = ({ closeModal }) => {
  return (
    <ModalWrapper closeModal={closeModal}>
      <span className={css.close} onClick={closeModal}>
        <Icon className={css.icon} iconName="close" />
      </span>
      <h2>Registration</h2>
    </ModalWrapper>
  );
};

export default RegisterModal;
