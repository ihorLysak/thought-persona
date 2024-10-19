"use client";

import styles from "./styles.module.css";

type Properties = {
  label?: string;
  icon?: JSX.Element;
  color?: "white" | "black";
  hasShadow?: boolean;
  hasBorder?: boolean;
  onClick: () => void;
};

const Button: React.FC<Properties> = ({
  label,
  icon,
  color = "black",
  hasShadow = false,
  onClick,
}: Properties) => {
  const appliedStyles = `${styles["base-styling"]} ${styles[color]} ${
    hasShadow && "btn-shadow"
  }`;

  return (
    <button className={appliedStyles} onClick={onClick}>
      {label && label}
      {icon && icon}
    </button>
  );
};

export { Button };
