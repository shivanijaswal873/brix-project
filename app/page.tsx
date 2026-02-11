"use client";

import { useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar";


export default function Home() {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <div className="layout">
      <Sidebar currentStep={currentStep} />
    </div>
  );
}