import React, { useState } from 'react';
import CreateResumeForm from './CreateResumeForm';
import CreateResumeHeader from './CreateResumeHeader';
import ResumeScheme from './ResumeScheme';
import { Box } from '@chakra-ui/react';
import { resumeInitial } from './resumeModel';

const CreateResume = () => {

    const [resume, setResume] = useState(resumeInitial)
    const handleChange = (event) => {
        setResume((prevData) => ({
            ...prevData,
            [event.target.name]: event.target.value,
        }));
    }
    console.log('ini'+resume.hobbies)
    return(
        <Box>
            <CreateResumeHeader 
                first_name={resume.first_name}
                last_name={resume.last_name}
            />
            <Box display={'grid'} gridTemplateColumns={'1fr 1fr'} gap={4} m={10}>
                <CreateResumeForm resume={resume} handleChange={handleChange} setResume={setResume}/>
                <ResumeScheme resume={resume}/>
            </Box>
        </Box>
    )    
}

export default CreateResume