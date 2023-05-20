import { Box, IconButton, Input, Text } from '@chakra-ui/react';
import React from 'react';
import { AiFillDelete, AiOutlinePlus } from 'react-icons/ai';

const MultipleInputs = ({inputs, label, handleChange, name}) => {

    const handleChangeInner = (index, value) => {
        const newInputs = [...inputs];
        newInputs[index] = value;
        console.log(newInputs)
        handleChange({target:{name:name, value:newInputs}})
      };
    
      const handleAdd = () => {
        handleChange({target:{name:name, value:[...inputs, '']}})
      };
    
      const handleRemove = (index) => {
        const newInputs = [...inputs];
        newInputs.splice(index, 1);
        handleChange({target:{name:name, value:newInputs}})
      };

    const input_list = inputs.map((input, index)=>{
        return(
            <>
            {index == 0 ? 
                    <Box display={'flex'} mt={2}>
                        <Input
                            key={index}
                            value={input}
                            onChange={(e) => handleChangeInner(index,e.target.value)}
                        />
                        <IconButton icon={<AiOutlinePlus />} onClick={handleAdd} ml={4}/>
                    </Box>
                    :
                    <Box display={'flex'} mt={2}>
                        <Input
                            key={index}
                            value={input}
                            onChange={() => handleChangeInner(index)}
                        />
                        <IconButton icon={<AiFillDelete />} onClick={()=>handleRemove(index)} ml={4}/>
                    </Box>
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