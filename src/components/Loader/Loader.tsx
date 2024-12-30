import { ColorRing } from "react-loader-spinner";

import css from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={css.loader}>
      <ColorRing
        visible={true}
        height="100"
        width="100"
        ariaLabel="color-ring-loading"
        wrapperStyle={{}}
        wrapperClass="color-ring-wrapper"
        colors={["#f03f3b", "#0957c3", "#103931", "#f8b26a", "#849b87"]}
      />
    </div>
  );
};

export default Loader;
