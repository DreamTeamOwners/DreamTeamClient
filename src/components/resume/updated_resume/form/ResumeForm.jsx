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

const ResumeForm = ({resume,handleChange,setResume}) => {
    return(
        <Box 
            overflowY={'scroll'}
            maxH={'500px'}
        >
            <Accordion
                allowToggle={'true'}
                allowMultiple={'true'}
            >
                <Personal resume={resume} handleChange={handleChange}/>
                <Educations/>
                <Experiences/>
                <Internships/>
                <Courses/>
                <Skills/>
                <Languages/>                
                <Hobbies resume={resume} setResume={setResume}/>
                <Recommendations/>
                <Qualities/>
                <Certificates/>
                <Other/>
            </Accordion>
        </Box>
    )
}

export default ResumeForm