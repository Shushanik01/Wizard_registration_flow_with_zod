import FormInput from "./components/formField/formInput";
import SelectForm from './components/formSelect/SelectForm';
import Calendar from "./components/calendar/Calendar";
import StepIndicator from "./components/stepIndicator/StepIndicator";
import { useState } from "react";

function App() {

  

  return (
    <>
      <FormInput label="this is label" type="text" placeholder="this is placeholder" />
      <SelectForm placeholder="the plaveholder" options={[1,2,3,4,5]}/>
      <Calendar/>
      <StepIndicator totalSteps={3} currentStep={1}/>
    </>
  )
}

export default App
