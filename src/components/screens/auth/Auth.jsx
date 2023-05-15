
import React from 'react';
import { InputGroup, InputRightElement, Checkbox,Text, Box, FormControl, FormErrorMessage, FormLabel, Input, Button, Image, HStack, Grid, GridItem } from '@chakra-ui/react';
import { Formik, Field, Form, ErrorMessage, useFormik } from 'formik';
import * as Yup from 'yup';
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';
import { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import LoginForm from './login/Login';
import RegistrationForm from './reg/Registration';


const Auth = () => {
    return (
        // <Box " mx="auto" mt={8} p={4} display="flex" alignItems="center">
        <Box my={12}  display={'flex'} justifyContent={'center'}>
            <Box maxW="80%">
            <Grid templateColumns='1fr 1fr' gap={6}>
                <GridItem flex={1} mr={4}>
                    <Image borderRadius={10} src="/login_icon.svg" alt="Image" objectFit="cover" />
                </GridItem>
                <Routes>
                    <Route path="/login" element={<LoginForm />} />
                    <Route path="/signup" element={<RegistrationForm />} />
                </Routes>
                
            </Grid>
            </Box>
        </Box>
    );
};

export default Auth;
