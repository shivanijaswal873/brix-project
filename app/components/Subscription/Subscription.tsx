'use client';

import { useState } from 'react';
import styles from './Subscription.module.scss';
import { FaUsers } from 'react-icons/fa';
import { FiCalendar } from 'react-icons/fi';
import { Plans } from './Subscription-plan';
import Button from '../Common/Button';

export default function Subscription({ setCurrentStep }: any) {
  const [selectedPlan, setSelectedPlan] = useState('professional');

  return (
    <section className={styles.subscription}>
      <div className={styles.container}>
        <h2>Available plans</h2>
        <p>Select the plan that best fits your needs and budget.</p>

        <div className={styles.planGrid}>
          {Plans.map((plan) => {
            const isActive = selectedPlan === plan.id;

            return (
              <button
                type="button"
                key={plan.id}
                onClick={() => setSelectedPlan(plan.id)}
                className={`${styles.card} ${isActive ? styles.active : ''}`}
              >
                <div className={styles.radio} />
                <h4>{plan.title}</h4>
                <p>{plan.desc}</p>

                <div className={styles.tags}>
                  <span>
                    <FaUsers /> {plan.users}
                  </span>
                  <span>
                    <FiCalendar /> {plan.billing}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        <div className={styles.buttons}>
          <Button variant="secondary" onClick={() => setCurrentStep(1)}>
            Back
          </Button>

          <Button variant="primary" onClick={() => setCurrentStep(3)}>
            Continue
          </Button>
        </div>
      </div>
    </section>
  );
}
