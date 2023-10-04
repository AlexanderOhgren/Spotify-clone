import { Link, Outlet } from "react-router-dom";
import styles from "./Navbar.module.css";
import Logo from "../../icons/logo/Logo";
import Home from "../../icons/home/Home";
import NavSearch from "../../icons/navSearch/NavSearch";

const Navbar = () => {
    return (
        <div className={styles.navContainer}>
            <div className={styles.sectionOne}>
                <Logo/>
                <div className={styles.sectionOneItems}>
                    <Home />
                    <h4>Home</h4>
                </div>
                <div className={styles.sectionOneItems}>
                    <NavSearch />
                    <h4>Search</h4>
                </div>
            </div>
            <div className={styles.sectionTwo}>
                <h1>Library</h1>
                <div className={styles.linkContainer}>
                    <p>Juridisk information</p>
                    <p>Integritets</p>
                    <p>Integritetspolicy</p>
                    <p>Cookie-inställningar</p>
                    <p>Om annonser</p>
                    <p>Hjälpmedel</p>
                    <p>Cookies</p>
                </div>
                <div style={{marginTop: "auto"}}>
                    <button className={styles.languageButton}><h4>English</h4></button>
                </div>
            </div>
            <Outlet />
        </div>
    )
}

export default Navbar;