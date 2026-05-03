import FormInput from "./assets/formField/formInput";
import SelectForm from './assets/formSelect/SelectForm'
function App() {

  return (
    <>
      <FormInput label="this is label" type="text" placeholder="this is placeholder" />
      <SelectForm placeholder="the plaveholder" options={[1,2,3,4,5]}/>
    </>
  )
}

export default App
