import React from 'react';
import styles from './formInput.module.css';

interface FormInputProps {
    label: string, 
    placeholder: string,
    type: string,
    name: string,
    value?: string,
    onChange?: React.ChangeEventHandler<HTMLInputElement>,
    onBlur?: React.FocusEventHandler<HTMLInputElement>
}

const FormInput = React.forwardRef<HTMLInputElement, FormInputProps>(({label, placeholder, type = 'text', name,
    // value,
     onChange, onBlur
}, ref)=>{

    return (
        <section className={styles.container}>
            <p>{label}</p>
            <input
            type={type}
            name={name}
            placeholder={placeholder}
            // value={value}
            onChange={onChange}
            ref={ref}
            onBlur={onBlur}
            />
        </section>
    )
}
)
FormInput.displayName = "FormInput";
export default FormInput