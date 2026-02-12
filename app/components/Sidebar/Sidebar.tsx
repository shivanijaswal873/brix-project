"use client";

import styles from "./Sidebar.module.scss";
import {steps} from "./Sidebar-data";

interface Props {
  currentStep: number;
}

export default function Sidebar({ currentStep }: Props) {
  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>
        <div className={styles.logoIcon}></div>
        <span>brix templates</span>
      </div>

      <div className={styles.steps}>
        {steps.map((step, index) => {
          const isActive = currentStep === step.id;
          const isCompleted = currentStep > step.id;

          return (
            <div key={step.id} className={styles.stepWrapper}>
              <div className={styles.leftSection}>
                <div
                  className={`${styles.circle}
                  ${isActive ? styles.active : ""}
                  ${isCompleted ? styles.completed : ""}
                `}
                >
                  {step.id}
                </div>

                {index !== steps.length - 1 && (
                  <div
                    className={`${styles.line}
                    ${currentStep > step.id ? styles.lineActive : ""}
                  `}
                  />
                )}
              </div>

              <div className={styles.content}>
                <h4>{step.title}</h4>
                <p>{step.description}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className={styles.help}>
        <div>
          <h4>Need a help?</h4>
          <p>chat with live support</p>
        </div>
      </div>
    </div>
  );
}
