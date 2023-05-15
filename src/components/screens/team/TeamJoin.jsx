import React from 'react';
import { teams } from '../../../data/teams';
import { Avatar, Box, Text,
        Accordion, AccordionButton, AccordionIcon,
        AccordionPanel, AccordionItem, Button,
        UnorderedList, ListItem
        } from '@chakra-ui/react';

const TeamJoin = () => {
    const list = teams.map((team)=>{
        return(
        <AccordionItem maxW={'80%'} mx={'10%'} bg={'#edf0f5'} borderRadius={5} my={2}>
            <h2>
                <AccordionButton>
                    <Box as="span" w={'100%'}display={'grid'} gridTemplateColumns={'7fr 3fr 3fr 3fr 1fr'} gap={4}>
                        {/* <Avatar src={team.title_img}/> */}
                        <Box textAlign={'start'}>
                            <Text color={'#93a3ba'} fontWeight={'bold'}>Компания</Text>
                            <Text fontWeight={'bold'}>{team.team_name}</Text>                            
                        </Box>
                        <Box textAlign={'start'}>
                            <Text color={'#93a3ba'} fontWeight={'bold'}>Нам нужны</Text>
                            <UnorderedList pl={4}>
                                {team.job_vacancies.map(job => {return(<ListItem>{job}</ListItem>)})}
                            </UnorderedList>                            
                        </Box>
                        <Box textAlign={'start'}>
                            <Text color={'#93a3ba'} fontWeight={'bold'}>Напраление</Text>
                            <Text fontWeight={'bold'}>{team.development_direction}</Text>                            
                        </Box>
                        <Box textAlign={'start'}>
                            <Text color={'#93a3ba'} fontWeight={'bold'}>Уровень команды</Text>
                            <Text fontWeight={'bold'}>{team.experience}</Text>                            
                        </Box>
                        <AccordionIcon />
                    </Box>
                    
                </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
                <Text>{team.project_description}</Text>
                <Text fontWeight={'semibold'}>Нас {team.team_size}:</Text>
                <UnorderedList pl={4}>
                    {team.team_members.map(req => {return(<ListItem>{req}</ListItem>)})}
                </UnorderedList>
                <Button borderRadius={4} bg={'black'} color={'white'} mt={4}>Подать заявку</Button>
            </AccordionPanel>
        </AccordionItem>
        )
    })
    return (
        <Box>
            <Text fontSize={24} mt={16} ml={'10%'}>
                Команды
            </Text>
            <Accordion allowToggle={'true'} mb={16} mt={4}>
                {list}  
            </Accordion>
        </Box>
    )
}

export default TeamJoin