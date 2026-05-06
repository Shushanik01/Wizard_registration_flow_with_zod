import { useState } from 'react'
import FormInput from "../../components/formField/formInput";
import SelectForm from "../../components/formSelect/SelectForm";
import Calendar from "../../components/calendar/Calendar";
import styles from './personalInfo.module.css';
import { useForm } from 'react-hook-form';
import {zodResolver } from '@hookform/resolvers/zod';
import { personalInfoSchema } from './formValidation';

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const currentYear = new Date().getFullYear()
const years = Array.from({ length: currentYear - 1900 + 1 }, (_, i) => currentYear - i)

interface inputValuetate {
    name: string,
    surname: string,
    email: string,
    company: string,
    address: string,
    month: string,
    day: number | null,
    year: number | null
}

const PersonalInfo = () => {
    const [selectedMonth, setSelectedMonth] = useState<string | null>(null)
    const [selectedDay, setSelectedDay] = useState<number | null>(null)
    const [selectedYear, setSelectedYear] = useState<number | null>(null);
    const [inputValue, setInputValue] = useState<inputValuetate>(
        {
            name: '',
            surname: '',
            email: '',
            company: '',
            address: '',
            month: '',
            day: null,
            year: null
        }
    )

    const monthIndex = inputValue.month ? months.indexOf(selectedMonth) : -1
    const daysInMonth = monthIndex >= 0
        ? new Date(selectedYear ?? 2000, monthIndex + 1, 0).getDate()
        : 31
    const days = Array.from({ length: daysInMonth }, (_, i) => i + 1)

    const handleDateSelect = (date: Date) => {
      setInputValue(prev => ({
        ...prev,
        month: months[date.getMonth()],
        day: date.getDate(),
        year: date.getFullYear()
      }))
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target
    
      setInputValue(prev => ({...prev, [name]: value}))
    
    };

    const {register, handleSubmit, formState:{errors}} = useForm({
        resolver: zodResolver(personalInfoSchema)
    });

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.nameField}>
                    <FormInput label="First Name" placeholder='First Name' type="text"
                        name = 'name'
                        value={inputValue.name}
                        onChange={handleInputChange} />
                    <FormInput label="Last Name" placeholder="Last Name" type="text"
                        name='surname'
                        value={inputValue.surname}
                        onChange={handleInputChange}
                    />
                </div>
                <FormInput label="Email Address" placeholder='Email Address' type="text"
                    name='email'
                    value={inputValue.email}
                    onChange={handleInputChange}
                />
                <FormInput label="Company (if aplicable)" placeholder='Company' type="text"
                    name='company'
                    value={inputValue.company}
                    onChange={handleInputChange}
                />
                <FormInput label="Physical address" placeholder='Physical address' type="text"
                    name='address'
                    value={inputValue.address}
                    onChange={handleInputChange}
                />
                <p>Date of Birth</p>
                <div className={styles.birthSection}>
                    <SelectForm
                        placeholder="Month"
                        options={months}
                        value={inputValue.month}
                        onChange = {(val)=>setInputValue(prev => ({...prev, month: val as string}))}
/>
                    <SelectForm
                        key={inputValue.month}
                        placeholder="Day"
                        options={days}
                        value={inputValue.day}
                        onChange={(val)=> setInputValue(prev => ({...prev, day: val as number}))}
                    />
                    <SelectForm
                        placeholder="Year"
                        options={years}
                        value={inputValue.year}
                        onChange={(val)=> setInputValue(prev => ({...prev, year: val as number}))}
/>
                    <Calendar onDateSelect={handleDateSelect} />
                </div>
            </div>
        </div>
    )
}

export default PersonalInfo