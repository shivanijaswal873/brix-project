"use client";

import { useState } from "react";
import { useForm, FormProvider, useFormContext } from "react-hook-form";
import Sidebar from "./components/Sidebar/Sidebar";
import PersonalForm from "./components/Form/Personal-form";
import Subscription from "./components/Subscription/Subscription";
import Service from "./components/Our-Services/Our-services";
import Account from "./components/Activate-account/Account";
import { FormData } from "./components/Form/FormFields";

export default function Home() {
  const [currentStep, setCurrentStep] = useState(1);

  const methods = useForm<FormData>({
    mode: "onChange",
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      company: "",
      address: "",
    },
  });
  const { reset } = methods;

  const handleRestart = () => {
    reset();
    setCurrentStep(1);
  };

  const onSubmit = (data: FormData) => {
    console.log("SUBMITTED DATA", data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="layout">
        <Sidebar currentStep={currentStep} />

        <div className="content">
          {currentStep === 1 && (
            <PersonalForm setCurrentStep={setCurrentStep} />
          )}
          {currentStep === 2 && (
            <Subscription setCurrentStep={setCurrentStep} />
          )}
          {currentStep === 3 && <Service setCurrentStep={setCurrentStep} />}
          {currentStep === 4 && <Account restartForm={handleRestart} />}
        </div>
      </form>
    </FormProvider>
  );
}
