import { Box, IconButton, Input, Text } from '@chakra-ui/react';
import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';

const MultipleInputs = ({inputs, label, handleChange, handleAdd}) => {

    const input_list = inputs.map((input, index)=>{
        return(
            <>
            {index == 0 ? 
                    <Box display={'flex'}>
                        <Input
                            key={index}
                            value={input}
                            onChange={() => handleChange(index)}
                        />
                        <IconButton icon={<AiOutlinePlus />} onClick={handleAdd} ml={4}/>
                    </Box>
                    :
                    <Input
                            key={index}
                            value={input}
                            onChange={() => handleChange(index)}
                    />
            }
            </>
        )
    })

    return(
        <Box>
            <Text>{label}</Text>
            {input_list}
        </Box>
    )
}

export default MultipleInputs