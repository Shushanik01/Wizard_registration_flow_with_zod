import React from 'react';
import styles from './formInput.module.css';

interface FormInputProps {
    label: string, 
    placeholder: string,
    type: string,
    // value: string,
    // onChange: React.ChangeEventHandler<HTMLInputElement>
}

const FormInput = ({label, placeholder, type = 'text', 
    // value, onChange
}:FormInputProps)=>{

    return (
        <section className={styles.container}>
            <p>{label}</p>
            <input
            type={type}
            placeholder={placeholder}
            // value={value}
            // onChange={onChange}
            />
        </section>
    )
}
export default FormInput