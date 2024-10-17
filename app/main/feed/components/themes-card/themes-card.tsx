import React from "react";

import styles from "./styles.module.css";

const ThemesCard: React.FC = () => {
  return (
    <div className={`white-box ${styles["container"]}`}>
      <h2>Themes</h2>
    </div>
  );
};

export { ThemesCard };
