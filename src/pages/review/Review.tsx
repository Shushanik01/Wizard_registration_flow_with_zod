import { useNavigate } from "react-router-dom";

interface ReviewProps {
    personalData: {
        name: string;
        surname: string;
        email: string;
        company?: string;
        address?: string;
    },
    accountData: {
        username: string;
        email?: string;
        password: string;
        confirmPassword?: string;
    },
    // setStep: React.Dispatch<React.SetStateAction<number>>
}

const Review = ({ personalData, accountData,
    //  setStep 
    }: ReviewProps) => {

        const navigate = useNavigate();
        const handleSubmit = ()=>{
            navigate('/hoorahPage')
        }

    return (
        <section>
            <div>
                <p>Do you want to register with these credentials?</p>
                <span>Name: {personalData.name}</span>
                <span>Surname: {personalData.surname} </span>
                <span>Email: {personalData.email} </span>
                <span>Username: {accountData.username} </span>
                <span>Password: {accountData.password} </span>
                <button
                onSubmit={handleSubmit}
                >Submit</button>
            </div>
        </section>
    )
}
export default Review