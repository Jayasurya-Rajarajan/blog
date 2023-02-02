import styles from './profileImage.module.css';

const ProfileImage = () =>{
    return (
        <>
            <div className={styles.profile__image__parent}>
                <section className={styles.profile__image__section}>
                    <div className={styles.profile__image}>

                    </div>
                </section>
                <section className={styles.profile__image__name}>
                    <h3>Jayasurya R</h3>
                </section>
            </div>
        </>
    );
}

export default ProfileImage;