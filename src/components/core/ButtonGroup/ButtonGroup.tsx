import styles from "./style.module.css";

type Props = {
  children: React.ReactNode;
};

export const ButtonGroup = ({ children }: Props) => {
  return <div className={styles.buttonGroup}>{children}</div>;
};
