import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Image,
} from '@chakra-ui/react';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

export const setAuthToken = (token: string) => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else delete axios.defaults.headers.common['Authorization'];
};

export default function LogInUser() {
  const navigate = useNavigate();
  const loginHandler = (e: any) => {
    navigate('/');
    e.preventDefault();
    axios.post('http://18.206.233.246/api/users/login/', form).then((r) => console.log(r.data));
  };
  const [form, setform] = useState({
    password: '',
    email: '',
  });
  const changeHandler = (e: any) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e: any) => {
    const loginPayload = {
      email: 'minuradil@gmail.com',
      password: 'nuradil02',
    };

    axios
      .post('http://18.206.233.246/api/users/login/', form)
      .then((response) => {
        console.log(response.data.access);
        const token = response.data.access;

        if (token) {
          localStorage.setItem('token', token);
          window.location.href = '/';
        }

        setAuthToken(token);
      })
      .catch((err) => console.log(err));
  };
  console.log(form);
  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={4} w={'full'} maxW={'md'}>
          <Heading fontSize={'2xl'}>Sign in to your account</Heading>
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input onChange={changeHandler} name="email" placeholder="Email" type="email" />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input
              onChange={changeHandler}
              name="password"
              placeholder="Password"
              type="password"
            />
          </FormControl>
          <Stack spacing={6}>
            <Stack
              direction={{ base: 'column', sm: 'row' }}
              align={'start'}
              justify={'space-between'}
            >
              <Checkbox>Remember me</Checkbox>
              <Link color={'blue.500'}>Forgot password?</Link>
            </Stack>
            <Button onClick={handleSubmit} colorScheme={'blue'} variant={'solid'}>
              Sign in
            </Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={
            'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80'
          }
        />
      </Flex>
    </Stack>
  );
}
