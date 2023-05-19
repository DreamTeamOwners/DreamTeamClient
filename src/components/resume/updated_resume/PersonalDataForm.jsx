import React from 'react';
import { Box, Button, HStack, IconButton, SimpleGrid, Text, Textarea} from '@chakra-ui/react';
import {
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
  } from '@chakra-ui/react'
import PhotoUploader from './PhotoUploader';
import InputWithLabel from './InputWithLabel';
import {AiOutlinePlus} from 'react-icons/ai'

const PersonalDataForm = ({resume,handleChange}) => {
    return (
        <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box as='span' flex='1' textAlign='left'  fontSize={20} m={3}>
                                Персональные данные
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <Box display={'grid'} gridTemplateColumns={'1fr 3fr'} gap={4}>
                            <Box>
                                <Text>Фото</Text>
                                <PhotoUploader />
                            </Box>
                            <Box display={'grid'} gridTemplateColumns={'1fr 1fr'} gap={4}>
                                <InputWithLabel 
                                    label='Имя' 
                                    inputValue={resume.first_name} 
                                    handleChange={handleChange}
                                    inputName={'first_name'}
                                />
                                <InputWithLabel 
                                    label='Фамилия' 
                                    inputValue={resume.last_name} 
                                    handleChange={handleChange}
                                    inputName={'last_name'}
                                />
                                {resume.emails ?
                                    resume.emails.map((email)=>{
                                        return(
                                            <Box gridColumnStart={'span 2'} display={'grid'} gridTemplateColumns={'8fr 1fr'}>
                                                <InputWithLabel 
                                                    label='Адрес эл. почты'
                                                    inputValue={email} 
                                                    //handleChange={handleArrayChange}
                                                    inputName={'emails'}
                                                />
                                                <IconButton icon={<AiOutlinePlus/>} ml={2} mt={6}/>
                                            </Box>
                                        )
                                    })
                                    :
                                    <Box gridColumnStart={'span 2'} display={'grid'} gridTemplateColumns={'8fr 1fr'}>
                                        <InputWithLabel label='Адрес эл. почты' />
                                        <IconButton icon={<AiOutlinePlus />} ml={2} mt={6} />
                                    </Box>                            
                                }
                                
                                <Box gridColumnStart={'span 2'} display={'grid'} gridTemplateColumns={'8fr 1fr'}>
                                    <InputWithLabel label='Номер телефона'  inputStyles={{type:'tel'}}/>
                                    <IconButton icon={<AiOutlinePlus/>}  ml={2} mt={6}/>                             
                                </Box>
                                
                            </Box>
                        </Box>
                        <SimpleGrid gridRow={'true'} rowGap={4}>
                            <InputWithLabel label='Заголовок' />
                            
                            <SimpleGrid columns={2} gap={4}>
                                <InputWithLabel label='Страна' />
                                <InputWithLabel label='Город' />
                            </SimpleGrid>
                            <InputWithLabel label='Дата рождения' inputStyles={{type:'date'}} />
                            <Box>
                                <Text>О себе</Text>
                                <Textarea variant={'filled'}></Textarea>
                            </Box>
                        </SimpleGrid>
                    </AccordionPanel>
                </AccordionItem>
    )
}

export default PersonalDataForm