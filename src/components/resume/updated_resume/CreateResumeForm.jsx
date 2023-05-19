import { Box, Input, SimpleGrid, Text, Textarea, VStack } from '@chakra-ui/react';

import {AiOutlineDownload} from 'react-icons/ai'
import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
  } from '@chakra-ui/react'
import PhotoUploader from './PhotoUploader';
import InputWithLabel from './InputWithLabel';
import PersonalDataForm from './PersonalDataForm';
import EducationDataForm from './EducationDataForm';
import ExperienceDataForm from './ExperienceDataForm';
import SkillsDataForm from './SkillsDataForm';
import LanguagesDataForm from './LanguagesDataForm';
import HobbyInput from './HobbyInput';

const CreateResumeForm = ({resume,handleChange,setResume}) => {
    return(
        <Box 
            overflowY={'scroll'}
            maxH={'500px'}
        >
            <Accordion
                allowToggle={'true'}
                allowMultiple={'true'}
            >
                <PersonalDataForm resume={resume} handleChange={handleChange}/>
                <EducationDataForm/>
                <ExperienceDataForm/>
                <SkillsDataForm/>
                <LanguagesDataForm/>
                <HobbyInput resume={resume} setResume={setResume}/>
                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box as="span" flex='1' textAlign='left'  fontSize={20} m={3}>
                                Нижний колонтитул
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    </AccordionPanel>
                </AccordionItem>
                
            </Accordion>
        </Box>
    )
}

export default CreateResumeForm