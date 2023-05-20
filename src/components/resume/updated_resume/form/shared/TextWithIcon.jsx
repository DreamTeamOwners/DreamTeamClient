import { Box, Text } from '@chakra-ui/react';
import React from 'react';

const TextWithIcon = ({icon, text}) => {
    return (
        <Box display={'flex'} alignItems={'center'}>
            {icon}
            <Text pl={1}>{text}</Text>
        </Box>
    )
}

export default TextWithIcon