import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import InputWithLabel from '../../InputWithLabel';

import {
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
  } from '@chakra-ui/react'
import CustomAccordionItem from './CustomAccordionItem';
import CustomAccordionPanel from './CustomAccordionPanel';

const SkillTemplate = (props) => {
    return (
        <CustomAccordionItem
            name={props.name}
        >
            <CustomAccordionPanel>
                <Box gridColumnStart={'span 2'}>
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