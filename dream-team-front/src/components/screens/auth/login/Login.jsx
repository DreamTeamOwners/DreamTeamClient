import styles from "./Login.module.css"
import {Link} from 'react-router-dom'
import { useState } from "react"
import {
    FormControl,
    FormLabel,
    Input,
    FormHelperText,
    FormErrorMessage,
    Text,

} from "@chakra-ui/react"

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleEmailChange = (e) => setEmail(e.target.value)
    const handlePasswordChange = (e) => setPassword(e.target.value)

    const isError = (email==='' && password ==='')

    return (
        <div className={styles.login}>
            <img src="/login_icon.svg" alt="человек с ноутбуком на черном фоне" />
            <FormControl isInvalid={isError}>
                <Text fontSize={24}>Log in</Text>
                <FormLabel>Email</FormLabel>
                <Input type='email' value={email} onChange={handleEmailChange} />
                {!(email==='') ? (
                    <FormHelperText>
                        Enter the email.
                    </FormHelperText>
                ) : (
                    <FormErrorMessage>Email is required.</FormErrorMessage>
                )}
                <FormLabel>Password</FormLabel>
                <Input type='password' value={password} onChange={handlePasswordChange} />
                {!(password==='') ? (
                    <FormHelperText>
                        Enter the password.
                    </FormHelperText>
                ) : (
                    <FormErrorMessage>Password is required.</FormErrorMessage>
                )}
            </FormControl>
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