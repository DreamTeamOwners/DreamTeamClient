import { Avatar, Box, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import TextWithIcon from '../../form/shared/TextWithIcon';
import { AiFillPhone } from 'react-icons/ai';
import {BsGeoAltFill} from 'react-icons/bs'
import {IoIosMail} from 'react-icons/io'

const Professional = ({resume}) => {
    return (
        <Box borderRadius={7} border={'1px solid lightgray'}>
            <Box
                display={'grid'}
                gridTemplateColumns={'1fr 5fr'}
                bg='lightblue'
                borderTopRadius={7}
                mb={4}
            >
                <Avatar src={resume.avatar} size={'2xl'} m={2}/>
                <Box>
                    <Heading>{resume.first_name + ' ' + resume.last_name}</Heading>
                    <Text>{resume.resume_title}</Text>
                    {/* <Text>{resume.sex}</Text> */}
                    <Box display={'flex'} justifyContent={'space-between'} mr={2} mt={10}>
                        {resume.emails[0] && <TextWithIcon icon={<IoIosMail />} text={resume.emails[0]} />}
                        {resume.phones[0] && <TextWithIcon icon={<AiFillPhone />} text={resume.phones[0]} />}
                        {resume.city && <TextWithIcon icon={<BsGeoAltFill />} text={resume.city + ', ' + resume.country} />}
                    </Box>
                </Box>
            </Box>
            <Box 
                display={'grid'} 
                gridTemplateColumns={'4fr 1fr'}
                borderBottomRadius={7}
                mb={4}     
            >
                <Box 
                    bg='red'
                    p={2}
                >
                    Main
                </Box>
                <Box 
                    bg='green'
                    p={2}    
                >
                    Side
                </Box>
            </Box>
        </Box>
            
    )
}

export default Professional