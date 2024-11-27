import React from "react";
import Wrapper from "../../components/Wrapper/Wrapper";
import Header from "../../components/Header/Header";
import css from "./HomePage.module.css";

const HomePage: React.FC = () => {
  return (
    <div>
      <Wrapper>
        <div className={css.header}>
          <Header />
        </div>
        {/* <div>
          <p>pppp</p>
        </div> */}
      </Wrapper>
    </div>
  );
};

export default HomePage;
