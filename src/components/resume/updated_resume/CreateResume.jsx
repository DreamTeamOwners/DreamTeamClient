import React from 'react';
import CreateResumeForm from './CreateResumeForm';
import CreateResumeHeader from './CreateResumeHeader';
import ResumeScheme from './ResumeScheme';
import { Box } from '@chakra-ui/react';

const CreateResume = () => {
    return(
        <Box>
            <CreateResumeHeader resume={{first_name:'Nuratan'}}/>
            <Box display={'grid'} gridTemplateColumns={'1fr 1fr'} gap={4} m={10}>
                <CreateResumeForm />
                <ResumeScheme />
            </Box>
        </Box>
    )    
}

export default CreateResume