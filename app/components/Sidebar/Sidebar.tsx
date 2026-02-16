'use client';

import { useState } from 'react';
import styles from './Sidebar.module.scss';
import { steps } from './Sidebar-data';
import { FiHeadphones } from 'react-icons/fi';

type Props = {
  currentStep: number;
};

export default function Sidebar({ currentStep }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const closeSidebar = () => setIsOpen(false);

  return (
    <>
      <button className={styles.menuBtn} onClick={toggleSidebar}>
        <span />
        <span />
        <span />
      </button>

      {isOpen && <div className={styles.overlay} onClick={closeSidebar} />}

      <div className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
        <div className={styles.logo}>
          <div className={styles.logoIcon}></div>
          <span>brix templates</span>
        </div>

        <div className={styles.steps}>
          {steps.map((step, index) => {
            const isActive = currentStep === step.id;
            const isCompleted = currentStep > step.id;

            return (
              <div
                key={step.id}
                className={styles.stepWrapper}
                onClick={closeSidebar}
              >
                <div className={styles.leftSection}>
                  <div
                    className={`${styles.circle}
                      ${isActive ? styles.active : ''}
                      ${isCompleted ? styles.completed : ''}
                    `}
                  >
                    {isCompleted ? step.id : step.id}
                  </div>

                  {index !== steps.length - 1 && (
                    <progress
                      className={styles.progress}
                      value={
                        currentStep > step.id
                          ? 100
                          : currentStep === step.id
                            ? 70
                            : 0
                      }
                      max={100}
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
          <div className={styles.helpText}>
            <h4>Need a help?</h4>
            <p>chat with live support</p>
          </div>

          <div className={styles.helpIcon}>
            <FiHeadphones size={20} />
          </div>
        </div>
      </div>
    </>
  );
}
