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

const resumeTemplates = [
    {
      name: 'Профессиональный',
      src: 'https://www.jobseeker.com/api/documents/template-preview/resume/ru/6b4e13bd-4f63-452b-98b9-36f8ab6a0bff',
    },
    {
      name: 'Хроно',
      src: 'https://www.jobseeker.com/api/documents/template-preview/resume/ru/801844a2-9c53-441a-a798-add160939ecd',
    },
    {
      name: 'Элегантный',
      src: 'https://www.jobseeker.com/api/documents/template-preview/resume/ru/ff08288a-5fa0-499d-ba9d-4133cdd9293b',
    },
    {
      name: 'Объявление',
      src: 'https://www.jobseeker.com/api/documents/template-preview/resume/ru/33c3ab26-06bb-466f-82f9-1a72c6fed814',
    },
    {
      name: 'Современный',
      src: 'https://www.jobseeker.com/api/documents/template-preview/resume/ru/428ba5c1-8596-4c9b-880a-a2f9b10c68ce',
    },
    {
        name: 'Хроно',
        src: 'https://www.jobseeker.com/api/documents/template-preview/resume/ru/801844a2-9c53-441a-a798-add160939ecd',
      },
      {
        name: 'Элегантный',
        src: 'https://www.jobseeker.com/api/documents/template-preview/resume/ru/ff08288a-5fa0-499d-ba9d-4133cdd9293b',
      },
      {
        name: 'Объявление',
        src: 'https://www.jobseeker.com/api/documents/template-preview/resume/ru/33c3ab26-06bb-466f-82f9-1a72c6fed814',
      },
      {
        name: 'Современный',
        src: 'https://www.jobseeker.com/api/documents/template-preview/resume/ru/428ba5c1-8596-4c9b-880a-a2f9b10c68ce',
      },
  ];

const ResumeScheme = ({resume}) => {
    return(
        <Box>
            <Text>
                {resume.first_name}
            </Text>
            <Box bg={'lightblue'} w={500} h={500}>a</Box>
            <Box border={'1px lightgray solid'} borderRadius={5} shadow={'3px'}>
                <Menu placement={'top'} isLazy='true' offset={[500,20]}>
                    <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                        <FaMagic/>
                    </MenuButton>
                    <MenuList 
                        display={'flex'}
                        overflowX={'scroll'}
                        maxW={'750px'}
                        
                    >
                        {resumeTemplates.map(template => {
                            return (
                                <MenuItem mx={2} maxW={'156px'} borderRadius={5} p={2}>
                                    <Box 
                                        w={'156px'}
                                        overflow={'hidden'}
                                        textOverflow={'ellipsis'}
                                        whiteSpace={'nowrap'}
                                        display={'flex'}
                                        flexDirection={'column'}
                                        justifyContent={'center'}
                                        alignItems={'center'}
                                        textAlign={'center'}
                                    >
                                        <Img maxW={'140px'} src={template.src} border={'1px black solid'} borderRadius={5}/>
                                        <Text fontSize={12}>{template.name}</Text>
                                    </Box>
                                </MenuItem>
                            )
                        })}
                    </MenuList>
                </Menu>
            </Box>
        </Box>
    )
}
export default ResumeScheme