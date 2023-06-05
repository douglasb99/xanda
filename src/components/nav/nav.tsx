import React from "react";
import styles from "./nav.module.scss";

interface NavProps {
  title: string;
}

const Nav: React.FC<NavProps> = ({ title }) => {
  return (
    <div className={styles.top}>
      <img src={"/assets/flag.png"} alt={"flag"} />
      <div>1137 1137 1137</div>
      <a href="tel:1137 1137 1137">
        <img src={"/assets/telephone.png"} alt={"telephone"} />
      </a>
      <div>Try another Castle</div>
    </div>
  );
};

export default Nav;
