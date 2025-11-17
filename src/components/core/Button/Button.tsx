import styles from "./style.module.css";

type Props = {
  label: string;
  onClick: () => void;
  color?: "primary" | "secondary";
};

export const Button = ({ label, onClick, color = "primary" }: Props) => {
  return (
    <button
      onClick={onClick}
      className={`${styles.btn} ${styles[`btn-${color}`]}`}
    >
      {label}
    </button>
  );
};
