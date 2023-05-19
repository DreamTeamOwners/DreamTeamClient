import React from 'react';
import CustomAccordionItem from './CustomAccordionItem';
import CustomAccordionPanel from './CustomAccordionPanel';
import InputWithLabel from './InputWithLabel';
import { Box } from '@chakra-ui/react';

const SimpleInput = ({label, value, handleChange, type, name}) => {
    return (
        <CustomAccordionItem
            name={name}
        >
            <CustomAccordionPanel>
                <Box gridColumnStart={'span 2'}>
                    <InputWithLabel
                        //label, value, handleChange, type, name
                        label={label}
                        value={value}
                        handleChange={handleChange}
                        type={type}
                        name={name}
                    />
                </Box>
            </CustomAccordionPanel>
        </CustomAccordionItem>
    )
}

export default SimpleInput