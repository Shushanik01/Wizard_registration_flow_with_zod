import { useNavigate } from "react-router-dom";
import styles from './review.module.css';

interface ReviewProps {
    personalData: {
        name: string;
        surname: string;
        email: string;
        company?: string;
        address?: string;
    } | null,
    accountData: {
        username: string;
        email?: string;
        password: string;
    } | null,
}

const Review = ({ personalData, accountData }: ReviewProps) => {
    const navigate = useNavigate();

    if (!personalData || !accountData) {
        navigate('/');
        return null;
    }

    const handleConfirm = () => {
        navigate('/hoorahPage');
    };

    return (
        <section className={styles.wrapper}>
            <div className={styles.container}>
                <div>
                    <p className={styles.title}>Review</p>
                    <p className={styles.subtitle}>Do you want to register with these credentials?</p>
                </div>

                <div className={styles.section}>
                    <p className={styles.sectionTitle}>Personal Info</p>
                    <div className={styles.divider} />
                    <div className={styles.row}>
                        <span className={styles.label}>First Name</span>
                        <span className={styles.value}>{personalData.name}</span>
                    </div>
                    <div className={styles.row}>
                        <span className={styles.label}>Last Name</span>
                        <span className={styles.value}>{personalData.surname}</span>
                    </div>
                    <div className={styles.row}>
                        <span className={styles.label}>Email</span>
                        <span className={styles.value}>{personalData.email}</span>
                    </div>
                    {personalData.company && (
                        <div className={styles.row}>
                            <span className={styles.label}>Company</span>
                            <span className={styles.value}>{personalData.company}</span>
                        </div>
                    )}
                    {personalData.address && (
                        <div className={styles.row}>
                            <span className={styles.label}>Address</span>
                            <span className={styles.value}>{personalData.address}</span>
                        </div>
                    )}
                </div>

                <div className={styles.section}>
                    <p className={styles.sectionTitle}>Account</p>
                    <div className={styles.divider} />
                    <div className={styles.row}>
                        <span className={styles.label}>Username</span>
                        <span className={styles.value}>{accountData.username}</span>
                    </div>
                    <div className={styles.row}>
                        <span className={styles.label}>Password</span>
                        <span className={styles.value}>{'•'.repeat(accountData.password.length)}</span>
                    </div>
                </div>

                <button className={styles.submitButton} onClick={handleConfirm}>
                    Confirm & Register
                </button>
            </div>
        </section>
    );
};

export default Review;
