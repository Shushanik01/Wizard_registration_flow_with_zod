import FormInput from "../../components/formField/formInput";
import styles from './accointDetails.module.css';
import { useForm } from "react-hook-form";
import { AccountDetailsSchema } from "./DetailsValidation";
import * as z from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";


interface AccoundDetailsProps {
    step1Email: string,
    setStep: React.Dispatch<React.SetStateAction<number>>
}

const AcountDetails = ({ step1Email, setStep }: AccoundDetailsProps) => {

    const schema = AccountDetailsSchema(step1Email)

    type AccountDetailsData = z.infer<ReturnType<typeof AccountDetailsSchema>>

    const { register, handleSubmit, formState: { errors } } = useForm<AccountDetailsData>({
        resolver: zodResolver(schema)
    });

    const onSubmit = (data: AccountDetailsData)=>{
        console.log(data);
        setStep(prev => prev + 1)
    }
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <p className={styles.title}>Account Details</p>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <FormInput
                        label="Username"
                        placeholder="Username"
                        type="text"
                        {...register('username')}
                        autoComplete="username"
                        error={errors.username?.message}
                    />
                    <FormInput
                        label="Email"
                        placeholder="Email"
                        type="text"
                        {...register('email')}
                        autoComplete="email"
                        error={errors.email?.message}
                    />
                    <FormInput
                        label="Password"
                        placeholder="Password"
                        type="password"
                        {...register('password')}
                        autoComplete="new-password"
                        error={errors.password?.message}
                    />
                    <FormInput
                        label="Confirm Password"
                        placeholder="Confirm Password"
                        type="password"
                        {...register('confirmPassword')}
                        autoComplete="new-password"
                        error={errors.confirmPassword?.message}
                    />
                    <button type="submit" className={styles.submitButton}>Submit</button>
                </form>
            </div>
        </div>
    )
}
export default AcountDetails