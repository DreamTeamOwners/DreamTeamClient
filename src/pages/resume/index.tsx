import {
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Textarea,
  Text,
  Box,
  Container,
  SimpleGrid,
  HStack,
  VStack,
  WrapItem,
  Avatar,
  Button,
  Spinner,
  Grid,
  GridItem,
} from '@chakra-ui/react';
import { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { Progress } from '@chakra-ui/react';
import ImageField from '~/shared/imagefield';
export default function SplitScreen() {
  const [username, setUserName] = useState('');
  const [surname, setSurName] = useState('');
  const [job, setJob] = useState('');
  const [email, setEmail] = useState('');
  const [contacts, setContacts] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [description, setDescription] = useState('');
  const [github, setGithub] = useState('');
  const [first, setfirst] = useState(false);
  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={4} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={5} w={'full'} maxW={'xl'}>
          lineHeight={'0%'}
          {first && (
            <>
              <Text fontSize={'14px'}>
                Saving:
                <Spinner
                  thickness="4px"
                  speed="0.65s"
                  emptyColor="gray.200"
                  color="blue.500"
                  size="sm"
                />
              </Text>
            </>
          )}
          <Text fontSize={'14px'}>Profile completeness:80%</Text>
          <Progress hasStripe value={80} />
          <Heading fontSize={'xl'}>Персональные данные</Heading>
          <Grid templateColumns="repeat(2, 5fr)" gap={2}>
            <GridItem rowSpan={5}>
              <FormControl id="text">
                <FormLabel>Имя</FormLabel>
                <Input type="text" value={username} onChange={(e) => setUserName(e.target.value)} />
              </FormControl>
              <FormControl id="text">
                <FormLabel>Фамилия</FormLabel>
                <Input type="text" value={surname} onChange={(e) => setSurName(e.target.value)} />
              </FormControl>
              <FormControl id="text">
                <FormLabel>Должность</FormLabel>
                <Input type="text" value={job} onChange={(e) => setJob(e.target.value)} />
              </FormControl>
              <FormControl id="text">
                <FormLabel>Email</FormLabel>
                <Input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
              </FormControl>
              <FormControl id="text">
                <FormLabel>Контакты</FormLabel>
                <Input type="text" value={contacts} onChange={(e) => setContacts(e.target.value)} />
              </FormControl>
            </GridItem>

            <GridItem rowSpan={2}>
              <ImageField />
            </GridItem>
          </Grid>
          <Grid templateColumns="repeat(2, 1fr)" gap={6}>
            <GridItem w="100%" h="100%">
              <FormControl id="text">
                <FormLabel>Город</FormLabel>
                <Input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
              </FormControl>
            </GridItem>
            <GridItem w="100%" h="100%">
              <FormControl id="text">
                <FormLabel>Страна</FormLabel>
                <Input type="text" value={country} onChange={(e) => setCountry(e.target.value)} />
              </FormControl>
            </GridItem>
          </Grid>
          <FormControl id="text">
            <FormLabel>Описание</FormLabel>
            <Textarea
              placeholder="Here is a sample placeholder"
              value={description}
              width={'450px'}
              onChange={(e) => setDescription(e.target.value)}
            />
          </FormControl>
          <FormControl id="text">
            <FormLabel>
              <Button leftIcon={<FaGithub />}></Button> Github
            </FormLabel>
            <Input type="text" value={github} onChange={(e) => setGithub(e.target.value)} />
          </FormControl>
        </Stack>
      </Flex>
      <Box flex={1} bg="#DFE1F4" color="black">
        <Box flex={1} bg="#DFE1F4" color="black" maxWidth={{ base: '100%', md: '50%' }}>
          <Flex spacing={4} as={Container} maxW={'3xl'} textAlign={'center'} gap={'30px'}>
            <WrapItem>
              <Avatar
                size="2xl"
                name="Segun Adebayo"
                src="https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-High-Quality-Image.png"
              />{' '}
            </WrapItem>
            <Box textAlign={'start'} color={'black'}>
              {(!!username || !!surname) && (
                <Text width={'450px'} fontSize={'16px'}>
                  Full name:{username} {surname}
                </Text>
              )}

              {!!job && (
                <Text width={'450px'} fontSize={'16px'}>
                  Job:{job}
                </Text>
              )}
              {!!city && (
                <Text width={'450px'} fontSize={'14px'}>
                  City:{city}
                </Text>
              )}
              {!!country && (
                <Text width={'450px'} fontSize={'14px'}>
                  Country:{country}
                </Text>
              )}
              {!!email && (
                <Text width={'450px'} fontSize={'14px'}>
                  Email:{email}
                </Text>
              )}
              {!!contacts && (
                <Text width={'450px'} fontSize={'14px'}>
                  Contacts:{contacts}
                </Text>
              )}
            </Box>
          </Flex>
        </Box>
        <Flex>
          <Flex>
            <Container maxW={'6xl'} mt={10}>
              <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
                <HStack align={'top'}>
                  <Box color={'green.400'} px={2}></Box>
                  <VStack align={'start'}>
                    <Text fontWeight={600} maxWidth={350}>
                      {github}
                    </Text>
                  </VStack>
                </HStack>
              </SimpleGrid>
            </Container>
          </Flex>

          <Flex>
            <Container maxW={'6xl'} mt={10}>
              <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
                <HStack align={'top'}>
                  <Box color={'green.400'} px={2}></Box>
                  <VStack align={'start'}>
                    {!!description && (
                      <>
                        <Text width={'450px'} fontWeight={600}>
                          Описание
                        </Text>
                        <Text color={'gray.600'} maxWidth={350}>
                          {description}
                        </Text>
                      </>
                    )}
                  </VStack>
                </HStack>
              </SimpleGrid>
            </Container>
          </Flex>
        </Flex>
      </Box>
    </Stack>
  );
}
