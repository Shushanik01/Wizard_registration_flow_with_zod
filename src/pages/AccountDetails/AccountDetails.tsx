import FormInput from "../../components/formField/formInput";
import styles from './accointDetails.module.css';
import { useForm } from "react-hook-form";

const AcountDetails = () => {



    return (
        <div className={styles.wrapper}>
            <FormInput label="Username" 
            placeholder="Username"
            type="text"
            {...register('username')}
            />
            <FormInput />
            <FormInput />
            <FormInput />
        </div>
    )
}