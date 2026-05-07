import FormInput from "./components/formField/formInput";
import SelectForm from './components/formSelect/SelectForm';
import Calendar from "./components/calendar/Calendar";
import StepIndicator from "./components/stepIndicator/StepIndicator";
import { useState } from "react";
import PersonalInfo from "./pages/personalInfo/PersonalInfo";
import AcountDetails from "./pages/AccountDetails/AccountDetails";
import { Routes, Route } from "react-router-dom";
import Review from "./pages/review/Review";

function App() {

  const [step, setStep] = useState<number>(1);
  const [step1Email, setStep1Email] = useState('');
  const [personalData, setPersonalData] = useState(null);
  const [accountData, setAccountData] = useState(null)

  return (
    <>
      <Routes>
        <Route path="/" element={<PersonalInfo step={step} setStep={setStep} step1Email={step1Email} setStep1Email={setStep1Email} setPersonalData={setPersonalData} />} />
        <Route path="/details" element={<AcountDetails step1Email={step1Email} setStep={setStep} setAccountData={setAccountData}/>} />
        <Route path="/review" element={<Review accountData={accountData} personalData={personalData}
        //  setStep={setStep}
         />}/>
      </Routes>
      <StepIndicator totalSteps={3} currentStep={step} />
    </>
  )
}

export default App
