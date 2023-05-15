import React from 'react';
import { vacancies } from '../../../data/vacancies';
import { Avatar, Box, Text,
        Accordion, AccordionButton, AccordionIcon,
        AccordionPanel, AccordionItem, Button,
        UnorderedList, ListItem
        } from '@chakra-ui/react';

const VacancyList = () => {
    const list = vacancies.map((vacancy)=>{
        return(
        <AccordionItem maxW={'80%'} mx={'10%'} bg={'#edf0f5'} borderRadius={5} my={2}>
            <h2>
                <AccordionButton>
                    <Box as="span" w={'100%'}display={'grid'} gridTemplateColumns={'7fr 3fr 3fr 3fr 1fr'} gap={4}>
                        {/* <Avatar src={vacancy.title_img}/> */}
                        <Box textAlign={'start'}>
                            <Text color={'#93a3ba'} fontWeight={'bold'}>Компания</Text>
                            <Text fontWeight={'bold'}>{vacancy.company}</Text>                            
                        </Box>
                        <Box textAlign={'start'}>
                            <Text color={'#93a3ba'} fontWeight={'bold'}>Должность</Text>
                            <Text fontWeight={'bold'}>{vacancy.position}</Text>                            
                        </Box>
                        <Box textAlign={'start'}>
                            <Text color={'#93a3ba'} fontWeight={'bold'}>Уровень</Text>
                            <Text fontWeight={'bold'}>{vacancy.level}</Text>                            
                        </Box>
                        <Box textAlign={'start'}>
                            <Text color={'#93a3ba'} fontWeight={'bold'}>Локация</Text>
                            <Text fontWeight={'bold'}>{vacancy.location}</Text>                            
                        </Box>
                        <AccordionIcon />
                    </Box>
                    
                </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
                <Text>{vacancy.description}</Text>
                <Text fontWeight={'semibold'}>Requirements:</Text>
                <UnorderedList pl={4}>
                    {vacancy.requirements.map(req => {return(<ListItem>{req}</ListItem>)})}
                </UnorderedList>
                <Button borderRadius={4} bg={'black'} color={'white'} mt={4}>Подробнее</Button>
            </AccordionPanel>
        </AccordionItem>
        )
    })
    return (
        <Box>
            <Text fontSize={24} mt={16} ml={'10%'}>
                Вакансии
            </Text>
            <Accordion allowToggle={'true'} mb={16} mt={4}>
                {list}  
            </Accordion>
        </Box>
    )
}

export default VacancyList