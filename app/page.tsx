"use client";

import { useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import PersonalForm from "./components/Form/Personal-form";

export default function Home() {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <div className="layout">
      <Sidebar currentStep={currentStep} />
      <div className="content">
        {currentStep === 1 && <PersonalForm setCurrentStep={setCurrentStep} />}
      </div>
    </div>
  );
}
