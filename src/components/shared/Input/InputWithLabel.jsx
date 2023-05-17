import React from 'react';
import {Box, Text, Input} from '@chakra-ui/react'

const InputWithLabel = ({label,styles, inputStyles}) => {
    return(
        <Box {...styles}>
            <Text>{label}</Text>
            <Input {...inputStyles} variant='filled'/>
        </Box>
    )
}

export default InputWithLabel