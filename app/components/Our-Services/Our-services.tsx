"use client";

import { useState } from "react";
import styles from "./Our-services.module.scss";
import {
  FaCode,
  FaPaintBrush,
  FaBullhorn,
  FaChartBar,
  FaCog,
  FaCube,
} from "react-icons/fa";
import Button from "../Common/Button";

type Props = {
  setCurrentStep: (step: number) => void;
};

const services = [
  { id: "dev", title: "Development", icon: <FaCode /> },
  { id: "design", title: "Web Design", icon: <FaPaintBrush /> },
  { id: "marketing", title: "Marketing", icon: <FaBullhorn /> },
  { id: "brand", title: "Brand Strategy", icon: <FaChartBar /> },
  { id: "opt", title: "Optimization", icon: <FaCog /> },
  { id: "other", title: "Other", icon: <FaCube /> },
];

export default function Service({ setCurrentStep }: Props) {
  const [selected, setSelected] = useState<string | null>(null);

  const handleContinue = () => {
    if (!selected) return;
    setCurrentStep(4);
  };

  return (
    <section className={styles.services}>
      <div className={styles.container}>
        <h2>Our Service</h2>
        <p>Select the plan that best fits your needs and budget.</p>

        <div className={styles.grid}>
          {services.map((item) => {
            const isActive = selected === item.id;

            return (
              <div
                key={item.id}
                onClick={() => setSelected(item.id)}
                className={`${styles.card} ${isActive ? styles.active : ""}`}
              >
                <div className={styles.iconBox}>{item.icon}</div>
                <span>{item.title}</span>
              </div>
            );
          })}
        </div>

        <div className={styles.buttons}>
          <Button variant="secondary" onClick={() => setCurrentStep(2)}>
            Back
          </Button>

          <Button
            variant="primary"
            disabled={!selected}
            onClick={handleContinue}
          >
            Continue
          </Button>
        </div>
      </div>
    </section>
  );
}
