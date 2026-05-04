import styles from './stepIndicatoe.module.css';
import { useState } from 'react';

interface StepIndicatorProps {
    totalSteps: number,
    currentStep: number
};

const StepIndicator = ({ totalSteps, currentStep }: StepIndicatorProps) => {

 
    return (
        <div className={styles.wrapper}>
            {Array.from({ length: totalSteps }, (_, i) => (
                <>
                    <div
                        key={i}
                        className={`${styles.circle} ${i + 1 <= currentStep ? styles.active : ''}`}
                    >
                        {i + 1}
                    </div>
                    {i + 1 < totalSteps && <div className={styles.line} />}
                </>
            ))}
        </div>
    )
}
export default StepIndicator