import { Link, Heading, Box, Img, Text, Grid } from '@chakra-ui/react';
import {GrLink, GrUserManager} from 'react-icons/gr'
import {BsTelephone, BsGeoAlt} from 'react-icons/bs'
import {CiMail} from 'react-icons/ci'
import React from 'react';



const ResumeView = ({ formData }) => {
    return (

        <Box >
            <Grid bg='aqua' gridTemplateColumns={'1fr 3fr'} borderRadius={4}>
                <Img minHeight={110} src={formData.image} borderRadius={4}/>
                <Box mx={4}>
                    <Box>
                        <Heading size={'lg'}>{formData.first_name + ' ' + formData.last_name}</Heading>
                        <Box display={'flex'}><Box p={1}><GrUserManager/></Box>{formData.job_position}</Box>
                    </Box>
                    <Box>
                        <Box display={'flex'}>
                            <Box p={1}><BsGeoAlt/></Box>
                        
                        {formData.city && <Text>{formData.city + ', ' + formData.country}</Text>}
                        </Box>
                        <Box display={'flex'}>
                        <Box p={1}><BsTelephone/></Box>
                        <Text>{formData.phone_number}</Text>
                        <Box ml={2} mr={1} pt={'5px'}><CiMail/></Box>{'kadyrov.atan@gmail.com'}
                        </Box>
                    </Box>
                </Box>
            </Grid>
            <Grid gridTemplateColumns={'1fr 3fr'} pt={4}>
                {formData.github &&<Box display={'flex'} borderRight={'1px lightgray solid'}>
                     <Link href={formData.github} isExternal>
                        My GitHub
                    </Link><Box p={1}><GrLink /></Box>
                </Box>}
                <Box gridColumnStart={'2'} mx={4}>
                    {formData.description && <Heading size={'lg'}>Profile</Heading>}
                    <Text>{formData.description}</Text>
                    {formData.education_title && <Heading size={'lg'}>Education</Heading>}
                    <Box>
                        <Text>{formData.education_title}</Text>
                        <Text>{formData.education_place}</Text>
                    </Box>
                    <Text>{formData.education_end_year}</Text>
                    {formData.experience_title && <Heading size={'lg'}>Experience</Heading>}

                    <Text>{formData.experience_title}</Text>
                    <Box>
                        <Text>{formData.experience_start_time}</Text>

                        <Text>{formData.experience_end_time}</Text>
                    </Box>
                    <Text>{formData.experience_description}</Text>
                </Box>
            </Grid>
            {/* <pre>{JSON.stringify(formData, null, 2)}</pre> */}
        </Box>
    )
}

export default ResumeView