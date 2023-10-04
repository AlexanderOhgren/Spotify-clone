import styles from "./Home.module.css"

const Home = () => {
    return (
        <div className={styles.homeContainer}>
            <div className={styles.topBar}>
                <div>
                    <h2>arrows</h2>
                </div>
                <div className={styles.rightContainer}>
                    <h3>Premium</h3>
                    <h3>Support</h3>
                    <h3>Download</h3>
                    <hr></hr>
                    <h3>Register</h3>
                    <button className={styles.logInButton}><h3>Log In</h3></button>
                </div>
            </div>
            <div className={styles.mainContainer}>
                <h1>Spotify Playlist</h1>
                <div className={styles.block}></div>
                <h1>Sleep</h1>
                <div className={styles.block}></div>
                <h1>Focus</h1>
                <div className={styles.block}></div>
                <div className={styles.aboutContainer}>
                    <div>
                        <h4>Company</h4>
                        <p>About</p>
                        <p>Work</p>
                        <p>For the record</p>
                    </div>
                    <div>
                        <h4>Communities</h4>
                        <p>For artists</p>
                        <p>Developers</p>
                        <p>Advertisement</p>
                        <p>Investors</p>
                        <p>Sellers</p>
                    </div>
                    <div>
                        <h4>Useful links</h4>
                        <p>Support</p>
                        <p>free mobile app</p>
                    </div>
                </div>
                <hr></hr>
                <div className={styles.stampContainer}>
                    <p>© 2023 Spotify AB</p>
                </div>
            </div>
        </div>  
    )
}

export default Home;