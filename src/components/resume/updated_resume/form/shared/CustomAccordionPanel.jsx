import { AccordionPanel, Box, Button, IconButton } from '@chakra-ui/react';
import React, { Children } from 'react';
import { AiFillDelete, AiOutlineCheck } from 'react-icons/ai';

const CustomAccordionPanel = ({index, handleRemove, children}) => {
    return(
        <AccordionPanel pb={4} border={'1px lightgray solid'} borderRadius={10} m={4} >
            <Box display={'grid'} gridTemplateColumns={'1fr 1fr'} gap={4}>
                {children}
                <Box gridColumnStart={'span 2'} display={'flex'} justifyContent={'flex-end'}>
                    <IconButton 
                        icon={<AiFillDelete />} 
                        onClick={()=>handleRemove(index)}
                    />
                    <Button ml={3} colorScheme='blue' leftIcon={<AiOutlineCheck />}>Готово</Button>
                </Box>
            </Box>
        </AccordionPanel>
    )
}

export default CustomAccordionPanel