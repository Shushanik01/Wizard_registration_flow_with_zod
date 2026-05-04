import { useState } from 'react'
import FormInput from "../../components/formField/formInput";
import SelectForm from "../../components/formSelect/SelectForm";
import Calendar from "../../components/calendar/Calendar";
import styles from './personalInfo.module.css'

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const currentYear = new Date().getFullYear()
const years = Array.from({ length: currentYear - 1900 + 1 }, (_, i) => currentYear - i)

const PersonalInfo = () => {
    const [selectedMonth, setSelectedMonth] = useState<string | null>(null)
    const [selectedYear, setSelectedYear] = useState<number | null>(null)

    const monthIndex = selectedMonth ? months.indexOf(selectedMonth) : -1
    const daysInMonth = monthIndex >= 0
        ? new Date(selectedYear ?? 2000, monthIndex + 1, 0).getDate()
        : 31
    const days = Array.from({ length: daysInMonth }, (_, i) => i + 1)

    return (
        <div className={styles.container}>
            <div className={styles.nameField}>
                <FormInput label="First Name" placeholder='First Name' type="text" />
                <FormInput label="Last Name" placeholder="Last Name" type="text" />
            </div>
            <FormInput label="Email Address" placeholder='Email Address' type="text" />
            <FormInput label="Company (if aplicable)" placeholder='Company' type="text" />
            <FormInput label="Physical address" placeholder='Physical address' type="text" />
            <p>Date of Birth</p>
            <div className={styles.birthSection}>
                <SelectForm
                    placeholder="Month"
                    options={months}
                    onSelect={(val) => setSelectedMonth(val as string)}
                />
                <SelectForm
                    key={selectedMonth}
                    placeholder="Day"
                    options={days}
                />
                <SelectForm
                    placeholder="Year"
                    options={years}
                    onSelect={(val) => setSelectedYear(val as number)}
                />
                <Calendar />
            </div>
        </div>
    )
}

export default PersonalInfo