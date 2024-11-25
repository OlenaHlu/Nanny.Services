import css from "./Wrapper.module.css";

type WrapperProps = {
  children: React.ReactNode;
};

const Wrapper = ({ children }: WrapperProps) => {
  return (
    <div className={css.wrapperContainer}>
      <div className={css.leftSide}></div>
      <div className={css.rightSide}></div>
      {children}
    </div>
  );
};

export default Wrapper;
