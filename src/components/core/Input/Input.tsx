import styles from "./style.module.css";

type Props = {
  placeholder?: string;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errorMessage?: string;
};

export const Input = ({
  placeholder,
  type,
  value,
  onChange,
  errorMessage,
}: Props) => {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`${styles.input} ${
          errorMessage ? styles["input--error"] : ""
        }`}
      />
      {errorMessage && (
        <span className={styles["input-error__message"]}>{errorMessage}</span>
      )}
    </div>
  );
};
