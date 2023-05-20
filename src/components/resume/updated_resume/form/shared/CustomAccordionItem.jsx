import { AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button } from '@chakra-ui/react';
import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';

const CustomAccordionItem = ({name, handleAdd, children, addButton}) => {
    return(
        <AccordionItem>
            <h2>
                <AccordionButton>
                    <Box as="span" flex='1' textAlign='left'  fontSize={20} m={3}>
                        {name}
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
            </h2>
            {children}
            {addButton &&
                <AccordionPanel>
                    <Button
                        leftIcon={<AiOutlinePlus />}
                        onClick={handleAdd}
                    >
                        Добавить {name}
                    </Button>
                </AccordionPanel>}
        </AccordionItem>
    )
}

export default CustomAccordionItem