import { useState } from 'react'
import calendarIcon from '../../svg/calendar-symbol.svg'

const Calendar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const handleCalendarBehaviour = ()=>{
        setIsOpen(prevState => !prevState)
    }

    return (
        <>
            <button type='button' onClick={handleCalendarBehaviour}>
                <img src={calendarIcon} />
            </button>
        </>
    )
}