import FormInput from "./components/formField/formInput";
import SelectForm from './components/formSelect/SelectForm';
import Calendar from "./components/calendar/Calendar";
import StepIndicator from "./components/stepIndicator/StepIndicator";
import { useState } from "react";
import PersonalInfo from "./pages/personalInfo/PersonalInfo";
import AcountDetails from "./pages/AccountDetails/AccountDetails";


function App() {

  const [step, setStep] = useState<number>(1);
  const [step1Email, setStep1Email] = useState('')
  

  return (
    <>
     <PersonalInfo step={step} setStep={setStep} step1Email={step1Email} setStep1Email={setStep1Email}/>
     <StepIndicator totalSteps={3} currentStep={step}/>
     <AcountDetails step1Email = {step1Email} setStep={setStep} />
    </>
  )
}

export default App
