
import React from 'react';
import { InputRightElement, Switch, Text, Box, FormControl, FormErrorMessage, FormLabel, Input, Button, Image, HStack, Grid, GridItem, InputGroup} from '@chakra-ui/react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { actions, loginAsync } from '../../../../store/auth/auth.slice';
import { useDispatch, useSelector } from 'react-redux';

// Валидационная схема с использованием Yup
const validationSchema = Yup.object().shape({
  username: Yup.string().required('Поле "username" обязательно для заполнения'),
  password: Yup.string().required('Поле "Пароль" обязательно для заполнения'),
});



const initialValues = {
  username: '',
  password: '',
};


const LoginForm = () => {
    const dispatch = useDispatch();
    const isAuth = useSelector((state) => state.auth.isAuth);

    const handleLogin = async (username, password) => {
        const credentials = { username: username, password: password };
        try {
            await dispatch(loginAsync(credentials));
        } catch (error) {
            // Обработка ошибки входа
        }
    };

    


    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)
    const handleSubmit = (values, { setSubmitting }) => {
        console.log(values)
        handleLogin(values.username, values.username)
        setSubmitting(false);
    };

    return (
        // <Box maxW="md" mx="auto" mt={8} p={4} display="flex" alignItems="center">
        <Box>{!isAuth ?
            <GridItem flex={1}>
                <Text fontSize={24} mb={3}>Log in</Text>
                <HStack spacing={4} mb={4}>

                    <Button colorScheme="blue" leftIcon={<FaFacebook />}>
                        Facebook
                    </Button>
                    <Button colorScheme="red" leftIcon={<FaGoogle />}>
                        Google
                    </Button>
                    <Button colorScheme="teal" leftIcon={<FaGithub />}>
                        GitHub
                    </Button>
                </HStack>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ isSubmitting }) => (
                        <Form>
                            <Field name="username">
                                {({ field, form }) => (
                                    <FormControl isInvalid={form.errors.username && form.touched.username}>
                                        <FormLabel htmlFor="username">Username</FormLabel>
                                        <Input {...field} id="username" placeholder="Введите ваш username" />
                                        <ErrorMessage name="username" component={FormErrorMessage} />
                                    </FormControl>
                                )}
                            </Field>

                            <Field name="password">
                                {({ field, form }) => (
                                    <FormControl isInvalid={form.errors.password && form.touched.password}>
                                        <FormLabel htmlFor="password">Пароль</FormLabel>
                                        <InputGroup display={"flex"}>
                                            <Input {...field} type={show ? 'text' : 'password'} id="password" placeholder="Введите ваш пароль" />
                                            <InputRightElement width='4.5rem'>
                                                <Button h='1.75rem' size='sm' onClick={handleClick}>
                                                    {show ? 'Hide' : 'Show'}
                                                </Button>
                                            </InputRightElement>
                                        </InputGroup>
                                        <ErrorMessage name="password" component={FormErrorMessage} />
                                    </FormControl>
                                )}
                            </Field>
                            <Box display={'flex'} justifyContent={'flex-end'} color={'blue'}><Link to='/forgot'>Forgot password?</Link></Box>
                            <Box display={"flex"} alignItems={"center"} mt={4}>
                                <FormLabel htmlFor='remember' mb='0'>
                                    Remember me
                                </FormLabel>
                                <Switch id='remember' />
                            </Box>

                            <Button mt={4} colorScheme="teal" isLoading={isSubmitting} type="submit">
                                Войти
                            </Button>
                        </Form>
                    )}
                </Formik>
            </GridItem>
            :
            <GridItem>
                    <Text fontSize={24} mb={3}>Вы уже авторизованы =)</Text>
                    <Button variant={'outline'} onClick={dispatch(actions.logout)}>Выйти</Button>
                </GridItem>
        }</Box>
    );
};

export default LoginForm;
