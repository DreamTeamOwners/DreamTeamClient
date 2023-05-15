import React from 'react';
import { companies } from '../../../data/companies';
import { Avatar, Box, Text,
        Accordion, AccordionButton, AccordionIcon,
        AccordionPanel, AccordionItem, Button
        } from '@chakra-ui/react';

const CompanyList = () => {
    const list = companies.map((company)=>{
        return(
        <AccordionItem maxW={'80%'} mx={'10%'} bg={'#edf0f5'} borderRadius={5} my={2}>
            <h2>
                <AccordionButton>
                    <Box as="span" w={'100%'}display={'grid'} gridTemplateColumns={'1fr 8fr 4fr 4fr 1fr'} gap={4}>
                        <Avatar src={company.title_img}/>
                        <Box textAlign={'start'}>
                            <Text color={'#93a3ba'} fontWeight={'bold'}>Компания</Text>
                            <Text fontWeight={'bold'}>{company.name}</Text>                            
                        </Box>
                        <Box textAlign={'start'}>
                            <Text color={'#93a3ba'} fontWeight={'bold'}>Проектов</Text>
                            <Text fontWeight={'bold'}>{company.projects}</Text>                            
                        </Box>
                        <Box textAlign={'start'}>
                            <Text color={'#93a3ba'} fontWeight={'bold'}>Вакансий</Text>
                            <Text fontWeight={'bold'}>{company.vacancies}</Text>                            
                        </Box>
                        <AccordionIcon />
                    </Box>
                    
                </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
                <Text>{company.description}</Text>
                <Text color={'blue'}>{company.tags.map(tag => {return('#'+tag+' ')})}</Text>
                <Button borderRadius={4} bg={'black'} color={'white'} mt={4}>Подробнее</Button>
            </AccordionPanel>
        </AccordionItem>
        )
    })
    return (
        <Box>
            <Text fontSize={24} mt={16} ml={'10%'}>
                Компании
            </Text>
            <Accordion allowToggle={'true'} mb={16} mt={4}>
                {list}  
            </Accordion>
        </Box>
    )
}

export default CompanyList