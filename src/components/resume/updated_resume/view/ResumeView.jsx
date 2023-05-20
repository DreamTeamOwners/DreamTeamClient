import React from 'react';
import { Box } from '@chakra-ui/react';

import TemplateMenu from './TemplateMenu';
import Professional from './ResumeTemplates/Professional';



const ResumeView = ({resume}) => {
    return(
        <Box>
            <Professional resume={resume}/>
            <TemplateMenu/>
        </Box>
    )
}
export default ResumeView