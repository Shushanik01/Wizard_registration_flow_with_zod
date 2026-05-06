import FormInput from "./components/formField/formInput";
import SelectForm from './components/formSelect/SelectForm';
import Calendar from "./components/calendar/Calendar";
import StepIndicator from "./components/stepIndicator/StepIndicator";
import { useState } from "react";
import PersonalInfo from "./pages/personalInfo/PersonalInfo";



function App() {

  const [step, setStep] = useState<number>(1)
  

  return (
    <>
     <PersonalInfo step={step} setStep={setStep}/>
     <StepIndicator totalSteps={3} currentStep={step}/>
    </>
  )
}

export default App
