import { useState, useEffect } from 'react'
import styles from './SelectForm.module.css'

interface SelectFormProps {
    placeholder?: string,
    options?: (string | number)[],
    onSelect?: (value: string | number) => void,
    value?: string | number
}

const SelectForm = ({ placeholder = '', options = [], onSelect, value }: SelectFormProps) => {

    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    useEffect(() => {
        if (value !== undefined) {
            const index = options.findIndex(opt => String(opt) === String(value))
            if (index !== -1) setSelectedIndex(index)
        }
    }, [value, options]);

    const handleUp = () => {
        if (selectedIndex === null) setSelectedIndex(0)
        else if (selectedIndex > 0) setSelectedIndex(selectedIndex - 1)
    };

    const handleDown = () => {
        if (selectedIndex === null) setSelectedIndex(0)
        else if (selectedIndex < options.length - 1) setSelectedIndex(selectedIndex + 1)
    }
    return (
        <div className={styles.wrapper}>
            <select
                value={selectedIndex === null ? '' : options[selectedIndex]}
                // onChange={(e) => setSelectedIndex(options.indexOf(e.target.value as string))}
                onChange={(e) => {
                    const index = options.findIndex(opt => String(opt) === e.target.value)
                    setSelectedIndex(index)
                    onSelect?.(options[index])
                }}
                defaultValue='' required>
                <option value="" disabled hidden>{placeholder}</option>
                {options.map(option => (
                    <option key={option} value={option}>{option}</option>
                ))}
            </select>
            <div className={styles.arrows}>
                <button type="button" onClick={handleUp}>▲</button>
                <button type="button" onClick={handleDown}>▼</button>
            </div>
        </div>
    )
}
export default SelectForm