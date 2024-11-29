import React from "react";
import Wrapper from "../../components/HomePageComponents/Wrapper/Wrapper";
import Header from "../../components/Header/Header";
import css from "./HomePage.module.css";
import LeftSide from "../../components/HomePageComponents/LeftSide/LeftSide";
import RightSide from "../../components/HomePageComponents/RightSide/RightSide";

const HomePage: React.FC = () => {
  return (
    <main className={css.homeContainer}>
      <div className={css.headerContainer}>
        <Header />
      </div>
      <Wrapper>
        <LeftSide />
        <RightSide />
      </Wrapper>
    </main>
  );
};

export default HomePage;
