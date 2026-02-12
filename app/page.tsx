"use client";

import { useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import PersonalForm from "./components/Form/Personal-form";
import Subscription from "./components/Subscription/Subscription";
import Service from "./components/Our-Services/Our-services";
import { FormData } from "./components/Form/FormFields";
import Account from "./components/Activate-account/Account";

export default function Home() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData | null>(null);

  return (
    <div className="layout">
      <Sidebar currentStep={currentStep} />
      <div className="content">
        {currentStep === 1 && (
          <PersonalForm
            setFormData={setFormData}
            setCurrentStep={setCurrentStep}
          />
        )}
        {currentStep === 2 && <Subscription setCurrentStep={setCurrentStep} />}
        {currentStep === 3 && <Service setCurrentStep={setCurrentStep} />}
        {currentStep === 4 && (
          <Account setCurrentStep={setCurrentStep} formData={formData} />
        )}
      </div>
    </div>
  );
}
