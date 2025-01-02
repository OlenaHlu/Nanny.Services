import Wrapper from "../../components/HomePageComponents/Wrapper/Wrapper";
import Header from "../../components/Header/Header";
import LeftSide from "../../components/HomePageComponents/LeftSide/LeftSide";
import RightSide from "../../components/HomePageComponents/RightSide/RightSide";

import css from "./HomePage.module.css";

const HomePage: React.FC = () => {
  return (
    <main className={css.homeContainer}>
      {/* <div className={css.headerContainer}>
        <Header />
      </div> */}
      <Wrapper>
        <LeftSide />
        <RightSide />
      </Wrapper>
    </main>
  );
};

export default HomePage;
