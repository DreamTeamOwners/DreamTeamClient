import React from 'react';
import { Box, SimpleGrid, Text, Textarea} from '@chakra-ui/react';
import PhotoUploader from './PhotoUploader';
import InputWithLabel from './InputWithLabel';
import CustomAccordionItem from '../shared/CustomAccordionItem';
import CustomAccordionPanel from '../shared/CustomAccordionPanel';
import MultipleInputs from '../shared/MultipleInputs';

const PersonalDataForm = ({resume,handleChange}) => {
    return (
        <CustomAccordionItem
            name='Персональные данные'
        >
            <CustomAccordionPanel>
                <Box display={'grid'} gridTemplateColumns={'1fr 3fr'} gap={4}>
                    <Box>
                        <Text>Фото</Text>
                        <PhotoUploader />
                    </Box>
                    <Box display={'grid'} gridTemplateColumns={'1fr 1fr'} gap={4}>
                        <InputWithLabel
                            label='Имя'
                            value={resume.first_name}
                            handleChange={handleChange}
                            name={'first_name'}
                        />
                        <InputWithLabel
                            label='Фамилия'
                            value={resume.last_name}
                            handleChange={handleChange}
                            name={'last_name'}
                        />
                        <InputWithLabel label='Дата рождения' type='date' />
                        <InputWithLabel label='Пол'/> //select кылыш керек
                    </Box>
                </Box>
                <SimpleGrid gridRow={'true'} rowGap={4}>
                    <InputWithLabel label='Заголовок' />

                    <SimpleGrid columns={2} gap={4}>
                        <InputWithLabel label='Страна' />
                        <InputWithLabel label='Город' />
                    </SimpleGrid>
                    <MultipleInputs
                    //inputs, label, handleChange, handleAdd
                        inputs={resume.emails}
                        label='Email'
                    />
                    <MultipleInputs
                    //inputs, label, handleChange, handleAdd
                        inputs={resume.phones}
                        label='Телефон'
                    />
                    <Box>
                        <Text>О себе</Text>
                        <Textarea 
                            variant={'filled'}
                            value={resume.description}
                            onChange={handleChange}
                        />
                    </Box>
                </SimpleGrid>
            </CustomAccordionPanel>
        </CustomAccordionItem>
    )
}

export default PersonalDataForm