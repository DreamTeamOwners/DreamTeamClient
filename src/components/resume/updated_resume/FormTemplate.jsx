import React from 'react';
import { Box, IconButton, Input, SimpleGrid, Text, Textarea, VStack, Button } from '@chakra-ui/react';
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
  } from '@chakra-ui/react'
import InputWithLabel from '../../shared/Input/InputWithLabel';
import {AiFillDelete, AiOutlinePlus, AiOutlineCheck} from 'react-icons/ai'
import AddButton from './AddButton';

const FormTemplate = (props) => {
    return (
        <AccordionItem>
            <h2>
                <AccordionButton>
                    <Box as="span" flex='1' textAlign='left'  fontSize={20} m={3}>
                        {props.name}
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
            </h2>
            <AccordionPanel pb={4} border={'1px lightgray solid'} borderRadius={10} m={4}>
                <Box display={'grid'} gridTemplateColumns={'1fr 1fr'} gap={4}>
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
                </Box>
            </AccordionPanel>
            <AddButton add_label={props.add_label}/>
        </AccordionItem>
    )
}

export default FormTemplate