import { useState } from 'react'
import calendarIcon from '../../svg/calendar-symbol.svg';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'


const Calendar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState<Date | null>(null)

    const handleCalendarBehaviour = ()=>{
        setIsOpen(prevState => !prevState)
    }

    return (
        <>
            <button type='button' onClick={handleCalendarBehaviour}>
                <img src={calendarIcon} />
            </button>
            {isOpen && (
                <DatePicker
                selected={selectedDate}
                onChange={(date)=>{
                    setSelectedDate(date)
                    setIsOpen(false)
                }}
                inline
                />
            )}
        </>
    )
}
export default Calendar