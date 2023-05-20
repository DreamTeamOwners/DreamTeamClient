import React from 'react';
import { Box, SimpleGrid, Text, Textarea} from '@chakra-ui/react';
import InputWithLabel from './../shared/InputWithLabel';
import CustomAccordionItem from '../shared/CustomAccordionItem';
import CustomAccordionPanel from '../shared/CustomAccordionPanel';
import MultipleInputs from '../shared/MultipleInputs';
import PhotoUploader from './PhotoUploder';

const Personal = ({resume,handleChange}) => {
    console.log('a')
    console.log(resume.first_name)
    return (
        <CustomAccordionItem
            name='Персональные данные' 
        >
            <CustomAccordionPanel>
                <Box display={'grid'} gridTemplateColumns={'1fr 3fr'} gap={4} gridColumnStart={'span 2'} >
                    <Box>
                        <Text>Фото</Text>
                        <PhotoUploader handleChange={handleChange}/>
                    </Box>
                    <Box display={'grid'} gridTemplateColumns={'1fr 1fr'} gap={4}>
                        <InputWithLabel
                            label='Имя'
                            value={resume.first_name}
                            handleChange={handleChange}
                            name='first_name'
                            placeholder='Вася'
                        />
                        <InputWithLabel
                            label='Фамилия'
                            value={resume.last_name}
                            handleChange={handleChange}
                            name='last_name'
                            placeholder='Пупкин'
                        />
                        <InputWithLabel 
                            label='Дата рождения' 
                            type='date' 
                            name='birth_date'
                            value={resume.birth_date}
                            handleChange={handleChange}
                        />
                        <InputWithLabel 
                            label='Пол'
                            name='sex'
                            value={resume.sex}
                            handleChange={handleChange}
                            //select кылыш керек
                        /> 
                    </Box>
                </Box>
                <SimpleGrid gridRow={'true'} rowGap={4} gridColumnStart={'span 2'}>
                    <InputWithLabel 
                        label='Заголовок'
                        name='resume_title'
                        value={resume.resume_title}
                        handleChange={handleChange}   
                     />

                    <SimpleGrid columns={2} gap={4}>
                        <InputWithLabel 
                            label='Страна' 
                            name='country'
                            value={resume.country}
                            handleChange={handleChange}    
                        />
                        <InputWithLabel 
                            label='Город' 
                            name='city'
                            value={resume.city}
                            handleChange={handleChange}    
                        />
                    </SimpleGrid>
                    <MultipleInputs
                        //inputs, label, handleChange, name
                        inputs={resume.emails}
                        label='Email'
                        name='emails'
                        handleChange={handleChange}
                        type='email'
                    />
                    <MultipleInputs
                        //inputs, label, handleChange, name
                        inputs={resume.phones}
                        label='Телефон'
                        name='phones'
                        handleChange={handleChange}
                        type='tel'
                    />
                    <Box>
                        <Text>О себе</Text>
                        <Textarea
                            variant={'filled'}
                            value={resume.self_description}
                            name='self_description'
                            onChange={handleChange}
                            size={'lg'}
                        />
                    </Box>
                </SimpleGrid>
            </CustomAccordionPanel>
        </CustomAccordionItem>
    )
}

export default Personal