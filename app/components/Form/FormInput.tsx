import { FieldError, UseFormRegister } from "react-hook-form";
import styles from "./Personal.module.scss";
import { FormData } from "./FormFields";

type Props = {
  name: keyof FormData;
  label: string;
  placeholder: string;
  register: UseFormRegister<FormData>;
  validation?: any;
  error?: FieldError;
  fullWidth?: boolean;
};

export default function FormInput({
  name,
  label,
  placeholder,
  register,
  validation,
  error,
  fullWidth,
}: Props) {
  return (
    <div
      className={`${styles.form__field} ${
        fullWidth ? styles["form__field--full"] : ""
      }`}
    >
      <label>
        {label}
        {validation?.required && <span> *</span>}
      </label>

      <input placeholder={placeholder} {...register(name, validation)} />

      {error && <p className={styles.form__error}>{error.message}</p>}
    </div>
  );
}
