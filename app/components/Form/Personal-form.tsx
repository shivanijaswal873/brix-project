"use client";

import { useForm } from "react-hook-form";
import styles from "./Personal.module.scss";
import FormInput from "./FormInput";
import { personalFields, FormData } from "./FormFields";

type Props = {
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
};

export default function PersonalForm({ setCurrentStep }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({
    mode: "onChange",
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
    setCurrentStep(2);
  };

  return (
    <div className={styles.formWrapper}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <h2 className={styles.form__title}>Personal information</h2>

        <div className={styles.form__grid}>
          {personalFields.map((field) => (
            <FormInput
              key={field.name}
              name={field.name}
              label={field.label}
              placeholder={field.placeholder}
              register={register}
              validation={field.validation}
              error={errors[field.name]}
              fullWidth={field.fullWidth}
            />
          ))}
        </div>

        <div className={styles.form__actions}>
          <button type="submit" disabled={!isValid}>
            Continue
          </button>
        </div>
      </form>
    </div>
  );
}
