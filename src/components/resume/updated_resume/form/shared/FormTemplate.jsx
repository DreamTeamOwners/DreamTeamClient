import React from 'react';
import { Box, IconButton, Text, Textarea, Button } from '@chakra-ui/react';

import InputWithLabel from './InputWithLabel';
import {AiFillDelete, AiOutlineCheck} from 'react-icons/ai'

import CustomAccordionItem from './CustomAccordionItem';
import CustomAccordionPanel from './CustomAccordionPanel';

const FormTemplate = (props) => {
    return (
        <CustomAccordionItem>
            <CustomAccordionPanel>
            <Box gridColumnStart={'span 2'}>
                        <InputWithLabel label={props.title_input_label} />
                    </Box>

                    <InputWithLabel label={props.place_input_label} />
                    <InputWithLabel label={props.city_input_label} />

                    <InputWithLabel label='Дата начала' inputStyles={{ type: 'date' }} />
                    <InputWithLabel label='Дата оканчания' inputStyles={{ type: 'date' }} />
                    <Box gridColumnStart={'span 2'}>
                        <Text>{props.description_label}</Text>
                        <Textarea variant={'filled'}></Textarea>
                    </Box>
                    <Box gridColumnStart={'span 2'} display={'flex'} justifyContent={'flex-end'}>
                        <IconButton icon={<AiFillDelete/>}/>
                        <Button ml={3} colorScheme='blue' leftIcon={<AiOutlineCheck/>}>Готово</Button>
                    </Box>
            </CustomAccordionPanel>
        </CustomAccordionItem>
    )
}

export default FormTemplate