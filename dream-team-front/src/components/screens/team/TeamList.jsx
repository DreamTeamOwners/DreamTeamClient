import { Box, Img, TableContainer,
         Table, TableCaption, Thead, 
         Tr,Th, Tbody, Avatar,
         Td, Text, Input,
         useDisclosure, Drawer, DrawerOverlay,
         DrawerBody, DrawerCloseButton, DrawerContent,
         DrawerHeader, DrawerFooter, Button
        } from '@chakra-ui/react';
import React from 'react';
import { useRef } from 'react';

const TeamList = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    return (
        <Box p={20}>
            <Box display={'grid'} gridTemplateColumns={'1fr 3fr'} maxW={'50%'}>
                <Img src='/icon_command_list.svg' alt='icon' />
                <Text>Список команды</Text>
            </Box>
            <Input my={10} placeholder='Search' />
            <Text>Количество участников: 2</Text>
            <Box>

                <TableContainer>
                    <Table variant='simple'>
                        <Thead>
                            <Tr>
                                <Th>Имя и фамилия</Th>
                                <Th>Статус</Th>
                                <Th>Работа</Th>
                                <Th>Команда</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr ref={btnRef} onClick={onOpen} 
                            _active={{
                                bg: '#edf0f5',
                            }}>
                                <Td>
                                    <Box display={'flex'} alignContent={'center'}>
                                        <Avatar src='https://bit.ly/dan-abramov' />
                                        <Text mx={2} pt={3}>Дана Акмолдоева</Text>
                                    </Box>
                                </Td>
                                <Td>Junior</Td>
                                <Td>Ux-Ui</Td>
                                <Td>DreamTeam</Td>
                            </Tr>
                            <Tr ref={btnRef} onClick={onOpen}
                                _active={{
                                    bg: '#edf0f5',
                                }}> 
                                <Td>
                                    <Box display={'flex'} alignContent={'center'}>
                                        <Avatar src='https://bit.ly/dan-abramov' />
                                        <Text mx={2} pt={3}>Дана Акмолдоева</Text>
                                    </Box>
                                </Td>
                                <Td>Junior</Td>
                                <Td>Ux-Ui</Td>
                                <Td>DreamTeam</Td>
                            </Tr>
                        </Tbody>
                    </Table>
                </TableContainer>
                <Drawer
                    isOpen={isOpen}
                    placement='right'
                    onClose={onClose}
                    finalFocusRef={btnRef}
                    size={'sm'}
                >
                    <DrawerOverlay />
                    <DrawerContent>
                        <DrawerCloseButton />
                        <DrawerHeader>Дана Акматова</DrawerHeader>

                        <DrawerBody>
                            <Img borderRadius={20} m={4} w={200} src='https://bit.ly/dan-abramov'/>
                            <Button mx={8} bg='black' borderRadius={16} color={'white'} w={168}>Профиль</Button>

                            <TableContainer>
                    <Table variant='simple'>
                        <Thead>
                            <Tr>
                                <Th></Th>
                                <Th></Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td>email</Td>
                                <Td>dana@gmail.com</Td>
                            </Tr>
                            <Tr>
                                <Td>phone</Td>
                                <Td>+996999888777</Td>
                            </Tr>
                            <Tr>
                                <Td>Пол</Td>
                                <Td>Женский</Td>
                            </Tr>
                            <Tr>
                                <Td>Работа</Td>
                                <Td>Ux-Ui</Td>
                            </Tr>
                            <Tr>
                                <Td>Команда</Td>
                                <Td>DreamTeam</Td>
                            </Tr>
                            <Tr>
                                <Td>Офис</Td>
                                <Td>ogogo</Td>
                            </Tr>
                            <Tr>
                                <Td>Начало</Td>
                                <Td>21.11.22</Td>
                            </Tr>
                            
                        </Tbody>
                    </Table>
                </TableContainer>
                        </DrawerBody>

                        <DrawerFooter>
                        </DrawerFooter>
                    </DrawerContent>
                </Drawer>
            </Box>
        </Box>
    )
}

export default TeamList