
import React from 'react';
import { Box, FormControl, FormErrorMessage, FormLabel, Input, Button, Image, HStack } from '@chakra-ui/react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FaFacebook, FaGoogle, FaTwitter } from 'react-icons/fa';

// Валидационная схема с использованием Yup
const validationSchema = Yup.object().shape({
  email: Yup.string().email('Некорректный адрес электронной почты').required('Поле "Email" обязательно для заполнения'),
  password: Yup.string().required('Поле "Пароль" обязательно для заполнения'),
});

const initialValues = {
  email: '',
  password: '',
};

const LoginForm = () => {
  const handleSubmit = (values, { setSubmitting }) => {
    // Выполнение действий при отправке формы
    console.log(values);
    setSubmitting(false);
  };

    return (
        <Box maxW="md" mx="auto" mt={8} p={4} display="flex" alignItems="center">
            <Box flex={1} mr={4}>
                <Image src="/login_icon.svg" alt="Image" w="200px" h="200px" objectFit="cover" />
            </Box>
            <Box flex={1}>
                <HStack spacing={4} mb={4}>
                    <Button colorScheme="blue" leftIcon={<FaFacebook />}>
                        Facebook
                    </Button>
                    <Button colorScheme="red" leftIcon={<FaGoogle />}>
                        Google
                    </Button>
                    <Button colorScheme="teal" leftIcon={<FaTwitter />}>
                        Twitter
                    </Button>
                </HStack>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ isSubmitting }) => (
                        <Form>
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
                                        <Input {...field} type="password" id="password" placeholder="Введите ваш пароль" />
                                        <ErrorMessage name="password" component={FormErrorMessage} />
                                    </FormControl>
                                )}
                            </Field>

                            <Button mt={4} colorScheme="teal" isLoading={isSubmitting} type="submit">
                                Войти
                            </Button>
                        </Form>
                    )}
                </Formik>
            </Box>
        </Box>
    );
};

export default LoginForm;
