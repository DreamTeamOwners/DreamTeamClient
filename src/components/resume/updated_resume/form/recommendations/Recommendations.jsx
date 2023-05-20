import React from 'react';
import CustomAccordionItem from '../shared/CustomAccordionItem';
import CustomAccordionPanel from '../shared/CustomAccordionPanel';
import { Box, Text, Textarea } from '@chakra-ui/react';
import InputWithLabel from '../shared/InputWithLabel';

const Recommendations = () => {
    return (

        //     title:'',
        //     employer:'',
        //     email:'',
        //     phone:'',
        //     description:'',
        //     country:'',
        //     city:''    

        <CustomAccordionItem
            name={'Рекомендации'}
        >
            <CustomAccordionPanel>
                <Box gridColumnStart={'span 2'}>
                    <InputWithLabel label={'Имя'} />
                </Box>

                <InputWithLabel label={"Организация"} />
                <InputWithLabel label={"Город"} />

                <InputWithLabel label='Email'/>
                <InputWithLabel label='Телефон'/>
                <Box gridColumnStart={'span 2'}>
                    <Text>Текст рекомендации</Text>
                    <Textarea variant={'filled'}></Textarea>
                </Box>
            </CustomAccordionPanel>
        </CustomAccordionItem>
    )
}

export default Recommendations