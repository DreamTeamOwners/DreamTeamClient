import React from 'react';
import { Box, Text, Button, Img } from '@chakra-ui/react';
import {ChevronDownIcon} from '@chakra-ui/icons'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
  } from '@chakra-ui/react'
import {FaMagic} from 'react-icons/fa'
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