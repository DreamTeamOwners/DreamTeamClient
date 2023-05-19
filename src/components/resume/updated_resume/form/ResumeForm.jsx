import React from 'react';
import {Accordion, Box} from '@chakra-ui/react'
import Personal from './personal/Personal';
import Educations from './education/Educations';
import Experiences from './experience/Experiences';
import Internships from './internships/Internships';
import Courses from './courses/Courses';
import Skills from './skills/Skills';
import Languages from './languages/Languages';
import Hobbies from './hobbies/Hobbies';
import Recommendations from './recommendations/Recommendations';
import Qualities from './qualities/Qualities';
import Certificates from './certificates/Certificates';
import Other from './other/Other';


const ResumeForm = ({resume,handleChange,setResume}) => {
    console.log(resume)
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