import React, { useState } from 'react';
import CreateResumeHeader from './CreateResumeHeader';
import { Box } from '@chakra-ui/react';
import { resumeInitial } from './resumeModel';
import ResumeForm from './form/ResumeForm';
import ResumeView from './view/ResumeView';

const ResumeEdit = () => {

    const [resume, setResume] = useState(resumeInitial)
    const handleChange = (event) => {
        setResume((prevData) => ({
            ...prevData,
            [event.target.name]: event.target.value,
        }));
    }

    return(
        <Box>
            <CreateResumeHeader 
                first_name={resume.first_name}
                last_name={resume.last_name}
            />
            <Box display={'grid'} gridTemplateColumns={'1fr 1fr'} gap={4} m={10}>
                {/* resume,handleChange,setResume */}
                <ResumeForm
                    resume={resume}
                    handleChange={handleChange}
                    setResume={setResume}
                />
                <ResumeView resume={resume}/>
            </Box>
        </Box>
    )    
}

export default ResumeEdit