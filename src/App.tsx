import FormInput from "./assets/formField/formInput";
import SelectForm from './assets/formSelect/SelectForm';
import Calendar from "./assets/calendar/Calendar";

function App() {

  return (
    <>
      <FormInput label="this is label" type="text" placeholder="this is placeholder" />
      <SelectForm placeholder="the plaveholder" options={[1,2,3,4,5]}/>
      <Calendar/>
    </>
  )
}

export default App
