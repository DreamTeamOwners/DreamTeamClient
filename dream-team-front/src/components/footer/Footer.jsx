import { Link } from "react-router-dom"
import styles from "./Footer.module.css"

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.links}>
                <Link>Dream Team</Link>
            </div>
            <div className={styles.links}>
                <Link>Вакансии</Link>
                <Link>Компании</Link>
                <Link>Добавить вакансии</Link>                
            </div>
            <div className={styles.links}>
                <Link>Личный кабинет</Link>
                <Link>Log in</Link>
                <Link>Sign in</Link>
            </div>
            <div className={styles.links}>
                <Link>О нас</Link>
                <Link>Контакты</Link>
                <Link>Присоединиться к команде</Link>
            </div>
        </div>
    )
}

export default Footer