import StepIndicator from "./components/stepIndicator/StepIndicator";
import { useState } from "react";
import PersonalInfo from "./pages/personalInfo/PersonalInfo";
import AcountDetails from "./pages/AccountDetails/AccountDetails";
import { Routes, Route, useLocation } from "react-router-dom";
import Review from "./pages/review/Review";
import HoorahPage from "./pages/hoorahPage/hoorahPage";

function App() {
  const { pathname } = useLocation();

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
         <Route path="/hoorahPage" element={<HoorahPage/>} />
      </Routes>
      {pathname !== '/hoorahPage' && <StepIndicator totalSteps={3} currentStep={step} />}
    </>
  )
}

export default App
