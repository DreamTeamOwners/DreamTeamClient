
import React from 'react';
import { InputGroup, InputRightElement, Checkbox,Text, Box, FormControl, FormErrorMessage, FormLabel, Input, Button, Image, HStack, Grid, GridItem } from '@chakra-ui/react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';

// Валидационная схема с использованием Yup
const validationSchema = Yup.object().shape({
  email: Yup.string().email('Некорректный адрес электронной почты').required('Поле "Email" обязательно для заполнения'),
  password: Yup.string().required('Поле "Пароль" обязательно для заполнения'),
});

const initialValues = {
  email: '',
  password: '',
};

const RegistrationForm = () => {
    const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)
  const handleSubmit = (values, { setSubmitting }) => {
    // Выполнение действий при отправке формы
    console.log(values);
    setSubmitting(false);
  };

    return (
        // <Box maxW="md" mx="auto" mt={8} p={4} display="flex" alignItems="center">
        <Grid templateColumns='1fr 1fr' gap={6}>
            <GridItem flex={1} mr={4}>
                <Image src="/login_icon.svg" alt="Image" objectFit="cover" />
            </GridItem>
            <GridItem flex={1}>
                <Text fontSize={24} mb={3}>Sign up</Text>
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
                            <Field name="name">
                                {({ field, form }) => (
                                    <FormControl isInvalid={form.errors.name && form.touched.name}>
                                        <FormLabel htmlFor="name">ФИО</FormLabel>
                                        <Input {...field} id="name" placeholder="Введите ваше ФИО" />
                                        <ErrorMessage name="name" component={FormErrorMessage} />
                                    </FormControl>
                                )}
                            </Field>

                            <Field name="phone">
                                {({ field, form }) => (
                                    <FormControl isInvalid={form.errors.phone && form.touched.phone}>
                                        <FormLabel htmlFor="phone">Телефон</FormLabel>
                                        <Input {...field} id="phone" placeholder="+996*********" />
                                        <ErrorMessage name="phone" component={FormErrorMessage} />
                                    </FormControl>
                                )}
                            </Field>

                            <Field name="email">
                                {({ field, form }) => (
                                    <FormControl isInvalid={form.errors.email && form.touched.email}>
                                        <FormLabel htmlFor="email">Email</FormLabel>
                                        <Input {...field} id="email" placeholder="Введите ваш email" />
                                        <ErrorMessage name="email" component={FormErrorMessage} />
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
                            <Box display={'flex'} justifyContent={'flex-end'} color={'blue'}><Button variant='link'>Сгенерировать пароль</Button></Box>
                            <Box display={"flex"} alignItems={"center"} >
                            <Checkbox defaultUnChecked>Я не робот</Checkbox>
                            </Box>

                            <Button mt={4} colorScheme="teal" isLoading={isSubmitting} type="submit">
                                Войти
                            </Button>
                        </Form>
                    )}
                </Formik>
            </GridItem>
        </Grid>
        // </Box>
    );
};

export default RegistrationForm;
