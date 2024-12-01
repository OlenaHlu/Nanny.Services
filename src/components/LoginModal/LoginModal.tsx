import ModalWrapper from "../ModalWrapper/ModalWrapper";
import Icon from "../common/Icon";
import css from "./LoginModal.module.css";

type LoginModalProps = {
  closeModal: () => void;
};

const LoginModal: React.FC<LoginModalProps> = ({ closeModal }) => {
  return (
    <ModalWrapper closeModal={closeModal}>
      <span className={css.close} onClick={closeModal}>
        <Icon className={css.icon} iconName="close" />
      </span>
      <h2>Log In</h2>
    </ModalWrapper>
  );
};

export default LoginModal;
