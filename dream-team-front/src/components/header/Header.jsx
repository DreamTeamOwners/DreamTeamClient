
import { NavLink } from "react-router-dom"
import styles from "./Header.module.css"
import NavBar from "./navbar/NavBar"

const Header = () => {
    return(
        <div className={styles.header}>
            <NavLink className={styles.link}  to="#">DreamTeam</NavLink>
            <NavBar/>
            <div className={styles.auth}>
                <NavLink className={styles.link}  to="login">Log in</NavLink>
                <NavLink className={styles.link}  to="reg">Sign up</NavLink>
            </div>
        </div>
    )
}

export default Header