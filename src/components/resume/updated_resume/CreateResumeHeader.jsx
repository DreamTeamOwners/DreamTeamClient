import React from 'react';
import { NavLink } from 'react-router-dom';
import { Box, Button, Text } from '@chakra-ui/react';
import {BiArrowBack} from 'react-icons/bi'
import {AiOutlineDownload} from 'react-icons/ai'
import LanguageMenu from './LanguageMenu';

const CreateResumeHeader = ({first_name, last_name}) => {
    return(
        <Box
            bg={'#011528'}
            color={'white'}
            display={'flex'}
            justifyContent={'space-between'}
            p={4}
        >
            <Button 
                as={NavLink}
                variant={'outline'}
                leftIcon={<BiArrowBack/>}
            >
                Назад
            </Button>

            <Text fontSize={24}>
                Резюме
                {first_name||last_name ? ' '+first_name+' '+last_name : ' без имени'}
            </Text>
            <Box>
                <LanguageMenu />

                <Button
                    leftIcon={<AiOutlineDownload />}
                    variant={'outline'}
                    ml={4}
                >
                    Скачать
                </Button>
            </Box>

        </Box>
    )
}

export default CreateResumeHeader