import React from 'react';
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';
import { HStack,Button } from '@chakra-ui/react';

const SocialLogin = () => {
    return (
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
    )
}

export default SocialLogin