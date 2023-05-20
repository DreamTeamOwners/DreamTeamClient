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
                <Educations resume={resume} handleChange={handleChange}/>
                <Experiences resume={resume} handleChange={handleChange}/>
                <Internships resume={resume} handleChange={handleChange}/>
                <Courses resume={resume} handleChange={handleChange}/>
                <Skills resume={resume} handleChange={handleChange}/>
                <Languages resume={resume} handleChange={handleChange}/>                
                <Hobbies resume={resume} setResume={setResume}/>
                <Recommendations resume={resume} handleChange={handleChange}/>
                <Qualities resume={resume} handleChange={handleChange}/>
                <Certificates resume={resume} handleChange={handleChange}/>
                <Other resume={resume} handleChange={handleChange}/>
            </Accordion>
        </Box>
    )
}

export default ResumeForm