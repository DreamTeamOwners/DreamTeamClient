import React from 'react';
import {Avatar, Img, Box} from '@chakra-ui/react'

const Side = () => {
    return(
        <Box 
                display={'grid'} 
                gridTemplateRows={'repeat(6,1fr)'} 
                gap={8} 
                bg={'#edf0f5'} 
                height={'100%'}
                p={4}
            >
                <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
                <Img src='/icon_team.svg' alt='Dan Abramov' />
                <Img src='/icon_phone.svg' alt='Dan Abramov' />
                <Img src='/icon_chat.svg' alt='Dan Abramov' />
                <Img src='/icon_calendar.svg' alt='Dan Abramov' />
                <Img src='/icon_analytics.svg' alt='Dan Abramov' />
            </Box>
    )
}

export default Side