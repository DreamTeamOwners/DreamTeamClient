import { Box } from '@chakra-ui/react';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import TeamCreate from './create/TeamCreate';
import TeamList from './TeamList';
import Side from '../../side/Side';

const Team = () => {
    return(
        <Box display={'grid'} gridTemplateColumns={'5% 90%'}>
            <Box>
                <Side/>
            </Box>
            <Box>
                <Routes>
                    <Route path='create' element={<TeamCreate/>}/>
                    <Route path='list' element={<TeamList/>}/>
                    <Route path='join' element={<TeamList/>}/>
                </Routes>
            </Box>
            
        </Box>
    )
}

export default Team