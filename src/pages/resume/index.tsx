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
} from "@chakra-ui/react";
import { useState } from "react";



export default function SplitScreen() {
  const [username, setUserName] = useState("");
  const [surname, setSurName] = useState("");
  const [job, setJob] = useState("");
  const [email, setEmail] = useState("");
  const [contacts, setContacts] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [description, setDescription] = useState("");
  const [github, setGithub] = useState("");

  return (
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={4} w={"full"} maxW={"md"}>
          lineHeight={"0%"}
          <Heading fontSize={"xl"}>Введите вашу конктактную информацию</Heading>
          <FormControl id="text">
            <FormLabel>Имя</FormLabel>
            <Input
              type="text"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
            />
          </FormControl>
          <FormControl id="text">
            <FormLabel>Фамилия</FormLabel>
            <Input
              type="text"
              value={surname}
              onChange={(e) => setSurName(e.target.value)}
            />
          </FormControl>
          <FormControl id="text">
            <FormLabel>Должность</FormLabel>
            <Input
              type="text"
              value={job}
              onChange={(e) => setJob(e.target.value)}
            />
          </FormControl>
          <FormControl id="text">
            <FormLabel>Email</FormLabel>
            <Input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <FormControl id="text">
            <FormLabel>Контакты</FormLabel>
            <Input
              type="text"
              value={contacts}
              onChange={(e) => setContacts(e.target.value)}
            />
          </FormControl>
          <FormControl id="text">
            <FormLabel>Страна</FormLabel>
            <Input
              type="text"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
          </FormControl>
          <FormControl id="text">
            <FormLabel>Город</FormLabel>
            <Input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </FormControl>
          <FormControl id="text">
            <FormLabel>Описание</FormLabel>
            <Textarea
              placeholder="Here is a sample placeholder"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </FormControl>
          <FormControl id="text">
            <FormLabel>GitHud</FormLabel>
            <Input
              type="text"
              value={github}
              onChange={(e) => setGithub(e.target.value)}
            />
          </FormControl>
        </Stack>
      </Flex>
      <Box flex={1} bg="#DFE1F4" color="black">
        <Box
          flex={1}
          bg="#DFE1F4"
          color="black"
          maxWidth={{ base: "100%", md: "50%" }}
        >
          <Flex
            spacing={4}
            as={Container}
            maxW={"3xl"}
            textAlign={"center"}
            gap={"30px"}
          >
            <WrapItem>
              <Avatar
                size="2xl"
                name="Segun Adebayo"
                src="https://bit.ly/sage-adebayo"
              />{" "}
            </WrapItem>
            <Box color={"black"}>
              <Text fontSize={"30px"}>
                {username} {surname}
              </Text>
              <Text fontSize={"16px"}>{job}</Text>
              <Text fontSize={"14px"}>
                {city} {country}
              </Text>
              <Text fontSize={"14px"}>
                {email} {contacts}
              </Text>
            </Box>
          </Flex>
        </Box>
        <Flex>
          <Flex>
            <Container maxW={"6xl"} mt={10}>
              <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
                <HStack align={"top"}>
                  <Box color={"green.400"} px={2}></Box>
                  <VStack align={"start"}>
                    <Text fontWeight={600} maxWidth={350}>
                      {github}
                    </Text>
                  </VStack>
                </HStack>
              </SimpleGrid>
            </Container>
          </Flex>

          <Flex>
            <Container maxW={"6xl"} mt={10} >
              <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
                <HStack align={"top"}>
                  <Box color={"green.400"} px={2}></Box>
                  <VStack align={"start"}>
                    <Text fontWeight={600}>Описание</Text>
                    <Text color={"gray.600"} maxWidth={350}>
                      {description}
                    </Text>
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
