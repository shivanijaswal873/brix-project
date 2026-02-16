'use client';

import { useFormContext } from 'react-hook-form';
import styles from './Personal.module.scss';
import FormInput from './FormInput';
import { personalFields, FormData } from './FormFields';
import Button from '../Common/Button';

export default function PersonalForm({ setCurrentStep }: any) {
  const {
    register,
    formState: { errors, isValid },
  } = useFormContext<FormData>();

  return (
    <section className={styles.formWrapper}>
      <div className={styles.form}>
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
          <Button
            type="submit"
            onClick={() => setCurrentStep(2)}
            disabled={!isValid}
          >
            Continue
          </Button>
        </div>
      </div>
    </section>
  );
}
