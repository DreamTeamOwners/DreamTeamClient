import React from 'react';
import {Box, Button } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom';

const SignButtons = () => {
    return (
        <Box display='flex' justifyContent='center'>
            <Button
                as={NavLink}
                mx={4}
                fontSize={'sm'}
                fontWeight={400}
                color="white"
                variant={'ghost'}
                href={'#'}
                _hover={{ bg: 'SteelBlue' }}
                _active={{ bg: '#3f739e' }}
                to="auth/login"
            >
                Sign in
            </Button>
            <Button
                as={NavLink}
                mx={4}
                fontSize={'sm'}
                fontWeight={400}
                color="white"
                variant={'outline'}
                href={'#'}
                _hover={{ bg: 'SteelBlue' }}
                _active={{
                    bg: '#3f739e',
                    transform: 'scale(0.98)',
                }}
                to="auth/signup"
            >
                Sign Up
            </Button>
        </Box>
    )
}

export default SignButtons