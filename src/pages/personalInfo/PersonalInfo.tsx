import { useState } from 'react'
import FormInput from "../../components/formField/formInput";
import SelectForm from "../../components/formSelect/SelectForm";
import Calendar from "../../components/calendar/Calendar";
import styles from './personalInfo.module.css';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { personalInfoSchema } from './formValidation';
import * as z from 'zod'

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const currentYear = new Date().getFullYear()
const years = Array.from({ length: currentYear - 1900 + 1 }, (_, i) => currentYear - i)

// interface inputValuetate {
//     name: string,
//     surname: string,
//     email: string,
//     company: string,
//     address: string,
//     month: string,
//     day: number | null,
//     year: number | null
// }

const PersonalInfo = () => {
    const [selectedMonth, setSelectedMonth] = useState<string | null>(null)
    const [selectedDay, setSelectedDay] = useState<number | null>(null)
    const [selectedYear, setSelectedYear] = useState<number | null>(null);
    // const [inputValue, setInputValue] = useState<inputValuetate>(
    //     {
    //         name: '',
    //         surname: '',
    //         email: '',
    //         company: '',
    //         address: '',
    //         month: '',
    //         day: null,
    //         year: null
    //     }
    // )

    const monthIndex = selectedMonth ? months.indexOf(selectedMonth) : -1
    const daysInMonth = monthIndex >= 0
        ? new Date(selectedYear ?? 2000, monthIndex + 1, 0).getDate()
        : 31
    const days = Array.from({ length: daysInMonth }, (_, i) => i + 1)

    // const handleDateSelect = (date: Date) => {
    //     setInputValue(prev => ({
    //         ...prev,
    //         month: months[date.getMonth()],
    //         day: date.getDate(),
    //         year: date.getFullYear()
    //     }))
    // };

    const handleDateSelect = (date: Date) => {
        setSelectedMonth(months[date.getMonth()])
        setSelectedDay(date.getDate())
        setSelectedYear(date.getFullYear())
    }

    // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    //     const { name, value } = e.target

    //   setInputValue(prev => ({...prev, [name]: value}))

    // };
    type PersonalInfoData = z.infer<typeof personalInfoSchema>

    const { register, handleSubmit, formState: { errors } } = useForm<PersonalInfoData>({
        resolver: zodResolver(personalInfoSchema)
    });


    const onSubmit = (data: PersonalInfoData) => {
        console.log({ ...data, month: selectedMonth, day: selectedDay, year: selectedYear });

    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <form
                onSubmit={handleSubmit(onSubmit)}
                >
                    <div className={styles.nameField}>
                        <FormInput label="First Name" placeholder='First Name' type="text"
                            // name='name'
                            {...register('name')}
                        // value={inputValue.name}
                        // onChange={handleInputChange}
                        />

                        {errors.name && <span>{errors.name.message}</span>}

                        <FormInput label="Last Name" placeholder="Last Name" type="text"
                            // name='surname'
                            {...register('surname')}
                        // value={inputValue.surname}
                        // onChange={handleInputChange}
                        />

                        {errors.surname && <span>{errors.surname.message}</span>}
                    </div>
                    <FormInput label="Email Address" placeholder='Email Address' type="text"
                        // name='email'
                        // value={inputValue.email}
                        // onChange={handleInputChange}
                        {...register('email')}
                    />

                    {errors.email && <span>{errors.email.message}</span>}

                    <FormInput label="Company (if aplicable)" placeholder='Company' type="text"
                        // name='company'
                        // value={inputValue.company}
                        // onChange={handleInputChange}
                        {...register('company')}
                    />
                    {errors.company && <span>{errors.company.message}</span>}
                    <FormInput label="Physical address" placeholder='Physical address' type="text"
                        // name='address'
                        // value={inputValue.address}
                        // onChange={handleInputChange}
                        {...register('address')}
                    />
                    {errors.address && <span>{errors.address.message}</span>}
                    <p>Date of Birth</p>
                    <div className={styles.birthSection}>
                        <SelectForm
                            placeholder="Month"
                            options={months}
                            value={selectedMonth}
                            onChange={(val) => setSelectedMonth(val as string)}
                        />

                        <SelectForm
                            key={selectedMonth}
                            placeholder="Day"
                            options={days}
                            value={selectedDay}
                            onChange={(val) => setSelectedDay(val as number)}
                        />
                        <SelectForm
                            placeholder="Year"
                            options={years}
                            value={selectedYear}
                            onChange={(val) => setSelectedYear(val as number)}
                        />
                        <Calendar onDateSelect={handleDateSelect} />
                    </div>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default PersonalInfo