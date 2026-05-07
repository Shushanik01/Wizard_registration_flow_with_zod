import React from 'react';
import styles from './formInput.module.css';

interface FormInputProps {
    label: string,
    placeholder: string,
    type: string,
    name: string,
    value?: string,
    onChange?: React.ChangeEventHandler<HTMLInputElement>,
    onBlur?: React.FocusEventHandler<HTMLInputElement>,
    error?: string,
    autoComplete?: string
}

const FormInput = React.forwardRef<HTMLInputElement, FormInputProps>(({label, placeholder, type = 'text', name,
    onChange, onBlur, error, autoComplete
}, ref)=>{

    return (
        <section className={styles.container}>
            <p>{label}</p>
            <div className={styles.inputWrapper}>
                <input
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    onChange={onChange}
                    ref={ref}
                    onBlur={onBlur}
                    autoComplete={autoComplete}
                    className={error ? styles.errorInput : ''}
                />
                {error && <span className={styles.errorMessage}>{error}</span>}
            </div>
        </section>
    )
}
)
FormInput.displayName = "FormInput";
export default FormInput