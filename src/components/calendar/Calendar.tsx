import { useState } from 'react'
import calendarIcon from '../../svg/calendar-symbol.svg';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import styles from './calendar.module.css'



interface CalendarProps {
    onDateSelect?: (date: Date) => void
}

const Calendar = ({ onDateSelect }: CalendarProps) => {

    const [isOpen, setIsOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState<Date | null>(null)

    const handleCalendarBehaviour = () => {
        setIsOpen(prevState => !prevState)
    }

    return (
        <div className={styles.wrapper}>
            <button type='button' onClick={handleCalendarBehaviour}>
                <img src={calendarIcon} />
            </button>
            {isOpen && (
                <div className={styles.datepickerWrapper}>
                    <DatePicker
                        selected={selectedDate}
                        onChange={(date) => {
                            if (date) {
                                setSelectedDate(date)
                                onDateSelect?.(date)
                            }
                            setIsOpen(false)
                        }}
                        inline
                    />
                </div>
            )}
        </div>
    )
}
export default Calendar