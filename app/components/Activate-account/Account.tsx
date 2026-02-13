"use client";

import { useFormContext } from "react-hook-form";
import styles from "./Account.module.scss";
import Button from "../Common/Button";
import { FormData } from "../Form/FormFields";

export default function Account({ restartForm }: any) {
  const { getValues } = useFormContext<FormData>();
  const formData = getValues();
  
if (!formData) {
    return <div>No Data Found</div>;
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <h2 className={styles.title}>Thank You for Your Submission!</h2>

        <p className={styles.message}>
          Your information has been successfully received.
        </p>

        <div className={styles?.details}>
          <p>
            <span>Name:</span> {formData.fullName}
          </p>
          <p>
            <span>Email:</span> {formData.email}
          </p>
          <p>
            <span>Phone:</span> {formData.phone}
          </p>
          <p>
            <span>Company:</span>
            {formData.company}
          </p>
          <p>
            <span>Address:</span> {formData.address}
          </p>
        </div>

        <div className={styles.buttons}>
          <Button variant="secondary" onClick={restartForm}>
            Back
          </Button>
        </div>
      </div>
    </div>
  );
}