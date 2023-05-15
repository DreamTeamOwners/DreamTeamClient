import React, { useState } from 'react';
import { IconButton, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Box } from '@chakra-ui/react';
import { ChatIcon } from '@chakra-ui/icons';

function ChatSupport() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Box
    position="absolute"
    w={50}
    h={50}
    top="600px"
    left="1100px"
    bottom="50px"
    right="50px"
    zIndex="9999"
    color={'white'}  
    >
      <IconButton 
        border={'white 1px solid'}
        borderRadius={15}
        icon={<ChatIcon />}
        aria-label="Чат поддержки"
        onClick={handleOpen}
        variant="ghost"
        size="md"
      />

      <Modal isOpen={isOpen} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Чат поддержки</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {/* Разместите здесь своё содержимое чата поддержки */}
            <p>Пример содержимого чата...</p>
          </ModalBody>
          <ModalFooter>
            {/* Дополнительные кнопки или действия чата поддержки */}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default ChatSupport;
