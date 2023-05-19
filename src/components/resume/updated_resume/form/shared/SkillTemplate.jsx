import { Box, Text, Button, IconButton } from '@chakra-ui/react';
import React from 'react';
import InputWithLabel from '../../InputWithLabel';

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
import AddButton from '../../AddButton';
import CustomAccordionItem from './CustomAccordionItem';
import CustomAccordionPanel from './CustomAccordionPanel';

const SkillTemplate = (props) => {
    return (
        <CustomAccordionItem>
            <CustomAccordionPanel>
                <Box>
                    <InputWithLabel label={props.title_input_label} />
                    <Text pt={3}>{props.slider_label}</Text>
                    <Slider aria-label='slider-ex-1' defaultValue={50}>
                        <SliderTrack>
                            <SliderFilledTrack />
                        </SliderTrack>
                        <SliderThumb />
                    </Slider>
                </Box>
            </CustomAccordionPanel>
        </CustomAccordionItem>
        
    )
}

export default SkillTemplate