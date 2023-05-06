import styles from "./NavBar.module.css"
import { NavLink } from "react-router-dom"

const NavBar = () =>{
    return(
        <div className={styles.bar}>
            <NavLink className={styles.link}  to="/">О нас</NavLink>
            <NavLink className={styles.link}  to="/">Компании</NavLink>
            <NavLink className={styles.link}  to="/">Вакансии</NavLink>
            <NavLink className={styles.link}  to="/">Присоединиться к команде</NavLink>
            <NavLink className={styles.link}  to="/">Создать команду</NavLink>
        </div>
    )
}

export default NavBar