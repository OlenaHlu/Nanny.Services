import { ColorRing } from "react-loader-spinner";

const Loader = () => {
  return (
    <div>
      <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="color-ring-loading"
        wrapperStyle={{}}
        wrapperClass="color-ring-wrapper"
        colors={["#f03f3b;", "#0957c3;", "#103931;", "#f8b26a'", "#849b87"]}
      />
    </div>
  );
};

export default Loader;
