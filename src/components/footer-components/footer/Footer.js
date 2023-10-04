import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <>
            <div className={styles.footerContainer}>
                <div className={styles.mainContainer}>
                <div>
                    <h4>PREVIEW OF SPOTIFY</h4>
                    <p>Register yourself to get unlimited of songs and podcast with ads time to time. 
                    No credit card needed.</p>
                </div>
                <button className={styles.registerButton}><h2>Register for free</h2></button>
                </div>
            </div>
        </>
    )
}

export default Footer;