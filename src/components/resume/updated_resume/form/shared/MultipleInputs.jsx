import { Box, IconButton, Input } from '@chakra-ui/react';
import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';

const MultipleInputs = ({inputs, label, handleChange, handleAdd}) => {
    return(
        <Box>
            <Text>{label}</Text>
            {inputs.map((input, index)=>{
                return(
                    <>
                    <Input
                        key={index}
                        value={input}
                        onChange={()=>handleChange(index)}
                    />
                    {index == 0 ? <IconButton icon={<AiOutlinePlus/>} onClick={handleAdd}/> : <></>}
                    </>
                )
            })}
        </Box>
    )
}

export default MultipleInputs