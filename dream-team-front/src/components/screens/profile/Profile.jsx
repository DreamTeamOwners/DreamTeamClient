import { Box, Img, Avatar } from '@chakra-ui/react';
import React from 'react';
import ProfileForm from '../profile/ProfileForm';
import { NavLink, Route, Routes } from 'react-router-dom';
import TeamCreate from '../team/create/TeamCreate';

const Profile = () => {
    return(
        <Box display={'grid'} gridTemplateColumns={'5% 90%'}>
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
            <Box>
                <Routes>
                    <Route path='' element={<ProfileForm/>}/>
                    <Route path='/create-team' element={<TeamCreate/>}/> 
                </Routes>
                
            </Box>
        </Box>
    )
}

export default Profile