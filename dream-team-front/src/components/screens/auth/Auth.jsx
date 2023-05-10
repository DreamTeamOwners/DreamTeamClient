import styles from "./Auth.module.css"
import {Routes, Route} from 'react-router-dom'
import LoginForm from "./login/Login"
import RegistrationForm from "./reg/Registration"
import Profile from "../profile/Profile"

const Auth = () => {
    return (
        <div className={styles.auth}>
            <Routes>
                <Route path="/login" element={<LoginForm/>}/>
                <Route path="/signup" element={<RegistrationForm/>}/>
                <Route path="/profile" element={<Profile/>}/>
            </Routes>
        </div>
    )
}

export default Auth