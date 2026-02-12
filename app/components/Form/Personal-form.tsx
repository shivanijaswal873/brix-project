"use client";

import { useForm } from "react-hook-form";
import styles from "./Personal.module.scss";
import FormInput from "./FormInput";
import { personalFields, FormData } from "./FormFields";
import Button from "../Common/Button";

type Props = {
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
  setFormData: React.Dispatch<React.SetStateAction<FormData |null >>;
};

export default function PersonalForm({ setCurrentStep, setFormData }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({
    mode: "onChange",
  });

  const onSubmit = (data: FormData) => {
    setFormData(data);
    console.log(data);
    setCurrentStep(2);
  };

  return (
    <section className={styles.formWrapper}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <h2 className={styles.form__title}>Personal information</h2>

        <div className={styles.form__grid}>
          {personalFields.map((field) => (
            <FormInput
              key={field.name}
              {...field}
              register={register}
              error={errors[field.name]}
            />
          ))}
        </div>

        <div className={styles.form__actions}>
          <Button type="submit" disabled={!isValid}>
            Continue
          </Button>
        </div>
      </form>
    </section>
  );
}
