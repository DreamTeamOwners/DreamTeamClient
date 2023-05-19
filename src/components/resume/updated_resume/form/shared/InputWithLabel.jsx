import React from 'react';
import {Box, Text, Input} from '@chakra-ui/react'

const InputWithLabel = ({label, value, handleChange, type, name}) => {
    return(
        <Box>
            <Text>{label}</Text>
            <Input 
                type={type} 
                name={name}
                variant='filled'
                value={value}
                onChange={handleChange}
            />
        </Box>
    )
}

export default InputWithLabel