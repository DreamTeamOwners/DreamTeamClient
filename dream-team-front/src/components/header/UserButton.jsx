import React from 'react';
import { Button, Box, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react"
import { NavLink } from 'react-router-dom';
import {BiChevronDown} from 'react-icons/bi'

const UserButton = ({user, logout}) => {
    return (
        <Box display='flex' justifyContent='center'>
            <Menu>
                <MenuButton as={Button} display={'flex'} rightIcon={<BiChevronDown/>}>
                    {user.username}
                </MenuButton>
                <MenuList>
                    <MenuItem as={NavLink} to='/profile'>Profile</MenuItem>                    
                    <MenuItem as={NavLink} to='/resume'>Resume</MenuItem>
                    <MenuItem onClick={logout}>Logout</MenuItem>
                </MenuList>
            </Menu>
        </Box>
    )
}

export default UserButton