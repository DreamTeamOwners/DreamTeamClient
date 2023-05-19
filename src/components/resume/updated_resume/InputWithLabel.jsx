import React from 'react';
import {Box, Text, Input} from '@chakra-ui/react'

const InputWithLabel = ({label, styles, inputStyles, inputValue, handleChange, inputName}) => {
    return(
        <Box {...styles}>
            <Text>{label}</Text>
            <Input 
                {...inputStyles} 
                name={inputName}
                variant='filled'
                value={inputValue}
                onChange={handleChange}
            />
        </Box>
    )
}

export default InputWithLabel