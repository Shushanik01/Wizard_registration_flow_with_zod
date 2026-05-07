import styles from './hoorahPage.module.css';

const HoorahPage = () => {
    return (
        <div className={styles.wrapper}>
            <p className={styles.title}>Congratulations!</p>
            <p className={styles.subtitle}>Your account has been successfully created.</p>
        </div>
    );
};

export default HoorahPage;
