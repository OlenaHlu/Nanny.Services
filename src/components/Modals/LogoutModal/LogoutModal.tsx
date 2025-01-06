import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../redux/hooks";

import ShowToast from "../../common/ShowToast";
import ModalWrapper from "../ModalWrapper/ModalWrapper";
import { logoutUser } from "../../../redux/auth/operations";

import css from "./LogoutModal.module.css";

type LogoutModalProps = {
  closeModal: () => void;
};

const LogoutModal: React.FC<LogoutModalProps> = ({ closeModal }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSubmit = () => {
    dispatch(logoutUser());
    closeModal();
    navigate("/");
    ShowToast({ message: "Logout successful!", type: "success" });
  };

  return (
    <ModalWrapper closeModal={closeModal}>
      <div className={css.modalContent}>
        <h4 className={css.formTitle}>Are you sure you want to log out?</h4>
        <div className={css.choiceContainer}>
          <button onClick={handleSubmit} className={css.btnLogout}>
            Yes
          </button>
          <button onClick={closeModal} className={css.btnLogout}>
            No
          </button>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default LogoutModal;
