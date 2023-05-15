import { Box, Img, Avatar } from '@chakra-ui/react';
import React from 'react';
import ProfileForm from '../profile/ProfileForm';
import { NavLink, Route, Routes } from 'react-router-dom';
import TeamCreate from '../team/create/TeamCreate';
import Side from '../../side/Side';

const Profile = () => {
    return(
        <Box display={'grid'} gridTemplateColumns={'5% 90%'}>
            <Side/>
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