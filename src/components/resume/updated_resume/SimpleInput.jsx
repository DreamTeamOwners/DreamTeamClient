import { Box, Text, Button, IconButton } from '@chakra-ui/react';
import React from 'react';
import InputWithLabel from './InputWithLabel';

import {AiFillDelete, AiOutlinePlus, AiOutlineCheck} from 'react-icons/ai'
import {
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    SliderMark,
  } from '@chakra-ui/react'
  import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
  } from '@chakra-ui/react'
import AddButton from './AddButton';

const SimpleInput = (props) => {
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
                <Box>
                    <InputWithLabel label={props.title_input_label} />
                </Box>
                <Box display={'flex'} justifyContent={'flex-end'} mt={4}>
                    <IconButton icon={<AiFillDelete />} />
                    <Button ml={3} colorScheme='blue' leftIcon={<AiOutlineCheck />}>Готово</Button>
                </Box>
            </AccordionPanel>
            <AddButton add_label={props.add_label} />
        </AccordionItem>
    )
}

export default SimpleInput