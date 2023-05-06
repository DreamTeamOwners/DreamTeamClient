import styles from "./Login.module.css"
import {Link} from 'react-router-dom'

const Login = () => {
    return(
        <div className={styles.login}>
            <img src="/login_icon.svg" alt="человек с ноутбуком на черном фоне" />
            <div className={styles.form}>
                <p>Log in</p>
                <Link><img src="/google" alt="" /></Link>
                <Link><img src="/facebook" alt="" /></Link>
                <Link><img src="/github" alt="" /></Link>
                <p>Email</p>
                <p>Password</p>
            </div>
        </div>
    )
}

export default Login