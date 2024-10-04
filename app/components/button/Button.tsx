import styles from "./styles.module.css";

type Properties = {
  label: string;
  color?: "white" | "black";
};

const Button: React.FC<Properties> = ({
  label,
  color = "black",
}: Properties) => {
  const appliedStyles = `${styles["base-styling"]} ${styles[color]}`;

  return <button className={appliedStyles}>{label}</button>;
};

export { Button };
