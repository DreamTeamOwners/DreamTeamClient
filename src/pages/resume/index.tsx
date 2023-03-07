import { AddIcon } from '@chakra-ui/icons'
import { Box,Flex,Grid,GridItem,Input, HStack, Text, TagLabel, Tag, TagLeftIcon, Textarea, Button, IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import React, { useState } from 'react'

const ResumePage = () => {
    const [value, setValue] = React.useState('')

    const handleInputChange = (egit push --force) => {
      const inputValue = e.target.value
      setValue(inputValue)
    }
    const [email, setEmail] = useState('');

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
      const emailValue = e.target.value;
      setEmail(emailValue);
    }
      
    
  return ( 
    <Grid
    templateAreas={`"nav main"`}
    // gridTemplateRows={'100x 1fr 100%'}
    gridTemplateColumns={'50% 1fr'}
    gap='0'
    color='blackAlpha.700'
    fontWeight='bold'
  >
    <GridItem pl='2' area={'nav'}>
            <Box>
                <Flex p={2} gap="30px">
                    <Box>
                        <Text color="#828BA2">Требуемая должность</Text>
                        <Input type="name" bg="#EFF2F9" border="1px" borderRadius="2px" w="300px" h="40px" fontSize='16px'/>
                    </Box>
                    <Box>
                        <Text color="#828BA2">image</Text>
                        <Input type="name" bg="#EFF2F9" border="1px" borderRadius="2px" w="300px" h="40px" fontSize='16px'/>
                    </Box>
                </Flex>
                <Flex p={2} gap="30px">
                    <Box>
                        <Text color="#828BA2">First Name</Text>
                        <Input type="name" bg="#EFF2F9" border="1px" borderRadius="2px" w="300px" h="40px" fontSize='16px'/>
                    </Box>
                    <Box>
                        <Text color="#828BA2">Last Name</Text>
                        <Input type="name" bg="#EFF2F9" border="1px" borderRadius="2px" w="300px" h="40px" fontSize='16px'/>
                    </Box>
                </Flex>
                <Flex p={2} gap="30px">
                    <Box>
                        <Text color="#828BA2">Email</Text>
                        <Input type="email" bg="#EFF2F9" border="1px" borderRadius="2px" w="300px" h="40px" fontSize='16px'/>
                    </Box>
                    <Box>
                        <Text color="#828BA2">Phone</Text>
                        <Input type="number" bg="#EFF2F9" border="1px" borderRadius="2px" w="300px" h="40px" fontSize='16px'/>
                    </Box>
                </Flex>
                <Flex p={2} gap="30px">
                    <Box>
                        <Text color="#828BA2">Country</Text>
                        <Input type="name" bg="#EFF2F9" border="1px" borderRadius="2px" w="300px" h="40px" fontSize='16px'/>
                    </Box>
                    <Box>
                        <Text color="#828BA2">Citi</Text>
                        <Input type="email" bg="#EFF2F9" border="1px" borderRadius="2px" w="300px" h="40px" fontSize='16px'/>
                    </Box>
                </Flex>
                <Box>
                    <Text color="#000" fontSize="18px">Professional Summary</Text>
                    <Text color="#828BA2" fontSize="14px" maxW={600}>Write 2-4 short & energetic sentences to interest the reader! Mention your role, experience & most importantly - your biggest achievements, best qualities and skills.</Text>
                    <Box>
                    <Textarea
                        value={value}
                        onChange={handleInputChange}
                        placeholder='Here is a sample placeholder'
                        size='sm'
                        w="55%"
                        h="200px"
                        bg="#EFF2F9"
                        border="1px"
                        borderRadius="2px"
                        fontSize='16px'
                        />
                    </Box>
                    <Flex gap="10px">
                        <Button  variant='subtle' border="none" borderRadius="5px" p="1px" bg="gray" gap="3px">
                            <Text>Cyan</Text>
                            <Text boxSize='8px' as={AddIcon} />
                        </Button>
                        <Button  variant='subtle' border="none" borderRadius="5px" p="1px" bg="gray" gap="3px">
                            <Text>Cyan</Text>
                            <Text boxSize='8px' as={AddIcon} />
                        </Button>
                        <Button  variant='subtle' border="none" borderRadius="5px" p="1px" bg="gray" gap="3px">
                            <Text>Cyan</Text>
                            <Text boxSize='8px' as={AddIcon} />
                        </Button>
                    </Flex>
                    <Flex gap="10px" mt="10px">
                        <Button  variant='subtle' border="none" borderRadius="5px" p="1px" bg="gray" gap="3px">
                            <Text>Cyan</Text>
                            <Text boxSize='8px' as={AddIcon} />
                        </Button>
                        <Button  variant='subtle' border="none" borderRadius="5px" p="1px" bg="gray" gap="3px">
                            <Text>Cyan</Text>
                            <Text boxSize='8px' as={AddIcon} />
                        </Button>
                        <Button  variant='subtle' border="none" borderRadius="5px" p="1px" bg="gray" gap="3px">
                            <Text>Cyan</Text>
                            <Text boxSize='8px' as={AddIcon} />
                        </Button>
                        <Button  variant='subtle' border="none" borderRadius="5px" p="1px" bg="gray" gap="3px">
                            <Text>Cyan</Text>
                            <Text boxSize='8px' as={AddIcon} />
                        </Button>
                    </Flex>
                    <Flex gap="10px" mt="10px">
                        <Button  variant='subtle' border="none" borderRadius="5px" p="1px" bg="gray" gap="3px">
                            <Text>Cyan</Text>
                            <Text boxSize='8px' as={AddIcon} />
                        </Button>
                        <Button  variant='subtle' border="none" borderRadius="5px" p="1px" bg="gray" gap="3px">
                            <Text>Cyan</Text>
                            <Text boxSize='8px' as={AddIcon} />
                        </Button>
                        <Button  variant='subtle' border="none" borderRadius="5px" p="1px" bg="gray" gap="3px">
                            <Text>Cyan</Text>
                            <Text boxSize='8px' as={AddIcon} />
                        </Button>
                    </Flex>


                </Box>
            </Box>
    </GridItem>
    <GridItem p={30} bg="gray" area={'main'} >
        <Grid bg="#fff" w="100%" h="100%">
            <Box>
            <HStack mt={'60px'}>
                <Text mb='8px' maxW={400} color="#000">{value}</Text>
            </HStack>
            </Box>

        </Grid>
    
    </GridItem>

  </Grid>
  )
}

export default ResumePage

