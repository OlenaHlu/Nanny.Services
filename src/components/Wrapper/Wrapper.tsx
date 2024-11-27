import css from "./Wrapper.module.css";

type WrapperProps = {
  children: React.ReactNode;
};

const Wrapper = ({ children }: WrapperProps) => {
  return (
    <>
      <div className={css.wrapperContainer}>{children}</div>
    </>
  );
};

export default Wrapper;
