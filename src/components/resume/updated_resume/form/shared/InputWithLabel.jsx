import React from 'react';
import {Box, Text, Input} from '@chakra-ui/react'

const InputWithLabel = ({label, value, handleChange, type, name, placeholder}) => {
    return(
        <Box>
            <Text>{label}</Text>
            <Input 
                type={type} 
                name={name}
                variant='filled'
                value={value}
                onChange={(e)=>handleChange(e)}
                placeholder={placeholder}
            />
        </Box>
    )
}

export default InputWithLabel