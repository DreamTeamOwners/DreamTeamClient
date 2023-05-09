import styles from "./Auth.module.css"
import {Routes, Route} from 'react-router-dom'
import LoginForm from "./login/Login"
import RegistrationForm from "./reg/Registration"

const Auth = () => {
    return (
        <div className={styles.auth}>
            <Routes>
                <Route path="/login" element={<LoginForm/>}/>
                <Route path="/signup" element={<RegistrationForm/>}/>
            </Routes>
        </div>
    )
}

export default Auth