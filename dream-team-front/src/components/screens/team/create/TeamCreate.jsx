import { Box, Button, Heading, 
        Input, Text, Menu, 
        MenuButton, MenuList, MenuItem, 
        Avatar, Modal, ModalBody,
        ModalOverlay, ModalContent, ModalHeader,
        ModalCloseButton, ModalFooter, Textarea
        } from '@chakra-ui/react';

import { useDisclosure } from '@chakra-ui/react';
import React from 'react';
import {BiChevronDown} from 'react-icons/bi'
import {AiOutlinePlus} from 'react-icons/ai'

const TeamCreate = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <Box display={'grid'} gridTemplateColumns={'3fr 2fr'} py={12} px={16}>
            <Box py={6} px={12}>
                <Heading>Dream Team</Heading>
                <Text pt={6}>Владелец</Text>
                <Input></Input>

                <Text pt={6}>Опыт</Text>
                <Input placeholder='Требуемый опыт участников'></Input>

                <Text pt={6}>Название команды</Text>
                <Input placeholder='Название команды'></Input>

                <Text pt={6}>Описание</Text>
                <Textarea placeholder='Цель вашей команды'></Textarea>

                <Text pt={6}>Ссылки</Text>
                <Input placeholder='www.site.com/example'></Input>
            </Box>
            <Box p={6}>
                <Box display={'grid'} gridTemplateColumns={'16fr 19fr'} gap={6} my={6}>
                    <Menu>
                        <MenuButton as={Button} display={'flex'} rightIcon={<BiChevronDown />} borderRadius={20} p={2}>
                            Список команды
                        </MenuButton>
                        <MenuList mt={4}>
                            <Box display={'grid'} gridTemplateColumns={'1fr 5fr'} gap={2}>
                                <Avatar m={2} name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
                                <Box mt={2}>
                                <Text fontSize={16}>Чолпонбек Эсенбеков</Text>
                                <Text fontSize={12}>Project manager</Text>
                                </Box>
                            </Box>
                            <Box display={'grid'} gridTemplateColumns={'1fr 5fr'} gap={2}>
                                <Avatar m={2} name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
                                <Box mt={2}>
                                <Text fontSize={16}>Чолпонбек Эсенбеков</Text>
                                <Text fontSize={12}>Project manager</Text>
                                </Box>
                            </Box>
                            <Box display={'grid'} gridTemplateColumns={'1fr 5fr'} gap={2}>
                                <Avatar m={2} name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
                                <Box mt={2}>
                                <Text fontSize={16}>Чолпонбек Эсенбеков</Text>
                                <Text fontSize={12}>Project manager</Text>
                                </Box>
                            </Box>
                            <Box display={'grid'} gridTemplateColumns={'1fr 5fr'} gap={2}>
                                <Avatar m={2} name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
                                <Box mt={2}>
                                <Text fontSize={16}>Чолпонбек Эсенбеков</Text>
                                <Text fontSize={12}>Project manager</Text>
                                </Box>
                            </Box>
                            <Box display={'flex'} justifyContent={'center'}>
                            <Button borderRadius={10} bg='black' color={'white'}>Подробнее</Button>
                            </Box>
                        </MenuList>
                    </Menu>
                    <>
                        <Button onClick={onOpen} leftIcon={<AiOutlinePlus />}  borderRadius={20} p={2}>Добавить участников</Button>

                        <Modal isOpen={isOpen} onClose={onClose} isCentered={'true'} size={'lg'}>
                            <ModalOverlay />
                            <ModalContent m={25}>
                                <ModalHeader>Добавить пользователей</ModalHeader>
                                <ModalCloseButton />
                                <ModalBody>
                                    <Text>Добавить пользователя по email</Text>
                                    <Textarea placeholder='Пример: della@gmail.com'></Textarea>
                                </ModalBody>

                                <ModalFooter>
                                    <Button  borderRadius={20} bg={'#011528'} color={'white'}  mr={3} onClick={onClose}>
                                        Добавить
                                    </Button>
                                    <Button  borderRadius={20} variant='outline' fontSize={14}>Копировать ссылку с приглашением</Button>
                                </ModalFooter>
                            </ModalContent>
                        </Modal>
                    </>
                </Box>
            </Box>
        </Box>
    )
}

export default TeamCreate