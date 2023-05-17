import React from 'react';
import {Menu, MenuButton, MenuItem, MenuList, Button } from '@chakra-ui/react'
import {ChevronDownIcon} from '@chakra-ui/icons'
import {IoLanguage} from 'react-icons/io5'

const LanguageMenu = () => {
    return (
        <Menu>
            <MenuButton 
                as={Button} 
                rightIcon={<ChevronDownIcon />} 
                variant={'outline'}
                leftIcon={<IoLanguage/>}    
            >
                Languages
            </MenuButton>
            <MenuList color={'black'}>
                <MenuItem>KG</MenuItem>
                <MenuItem>EN</MenuItem>
                <MenuItem>RU</MenuItem>
            </MenuList>
        </Menu>
    )
}

export default LanguageMenu