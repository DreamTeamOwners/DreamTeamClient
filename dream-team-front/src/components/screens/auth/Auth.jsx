import styles from "./Auth.module.css"
import {Routes, Route} from 'react-router-dom'
import Login from "./login/Login"

const Auth = () => {
    return (
        <div className={styles.auth}>
            <Routes>
                <Route path="/login" element={<Login/>}/>
                <Route path="/reg" element={<Login/>}/>
            </Routes>
        </div>
    )
}

export default Auth