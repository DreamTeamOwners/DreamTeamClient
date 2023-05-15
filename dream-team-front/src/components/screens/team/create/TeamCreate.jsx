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
        <Box display={'grid'} gridTemplateColumns={'2fr 1fr'} py={12} px={16}>
            <Box py={6} px={12}>
                <Heading>Dream Team</Heading>
                <Text>Владелец</Text>
                <Input></Input>

                <Text>Опыт</Text>
                <Input></Input>

                <Text>Название команды</Text>
                <Input></Input>

                <Text>Описание</Text>
                <Input></Input>

                <Text>Ссылки</Text>
                <Input></Input>
            </Box>
            <Box p={6}>
                <Box display={'grid'} gridTemplateColumns={'1fr 1fr'} gap={6} my={6}>
                    <Menu>
                        <MenuButton as={Button} display={'flex'} rightIcon={<BiChevronDown />}>
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
                            <Button>Подробнее</Button>
                            </Box>
                        </MenuList>
                    </Menu>
                    <>
                        <Button onClick={onOpen} leftIcon={<AiOutlinePlus />}>Добавить участников</Button>

                        <Modal isOpen={isOpen} onClose={onClose}>
                            <ModalOverlay />
                            <ModalContent>
                                <ModalHeader>Добавить пользователей</ModalHeader>
                                <ModalCloseButton />
                                <ModalBody>
                                    <Text>Добавить пользователя по email</Text>
                                    <Textarea placeholder='Пример: della@gmail.com'></Textarea>
                                </ModalBody>

                                <ModalFooter>
                                    <Button colorScheme='blue' mr={3} onClick={onClose}>
                                        Добавить
                                    </Button>
                                    <Button variant='ghost'>Копировать ссылку с приглашением</Button>
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