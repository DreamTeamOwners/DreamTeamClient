import Icon from "@chakra-ui/icon/dist/icon";
import { CheckIcon } from "@chakra-ui/icons";
import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Image,
  Textarea,
  Text,
  Box,
  Container,
  SimpleGrid,
  HStack,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";

const features = Array.apply(null, Array(8)).map(function (x, i) {
  return {
    id: i,
    title: "Lorem ipsum dolor sit amet",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.",
  };
});

export default function SplitScreen() {
  const [username, setusername] = useState("");
  return (
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={4} w={"full"} maxW={"md"}>
          lineHeight={"0%"}
          <Heading fontSize={"xl"}>Введите вашу конктактную информацию</Heading>
          <FormControl id="text">
            <FormLabel>Должность</FormLabel>
            <Input type="text" />
          </FormControl>
          <FormControl id="text">
            <FormLabel>Имя</FormLabel>
            <Input
              type="text"
              value={username}
              onChange={(e) => setusername(e.target.value)}
            />
          </FormControl>
          <FormControl id="text">
            <FormLabel>Фамилия</FormLabel>
            <Input type="text" />
          </FormControl>
          <FormControl id="text">
            <FormLabel>Email</FormLabel>
            <Input type="text" />
          </FormControl>
          <FormControl id="text">
            <FormLabel>Страна</FormLabel>
            <Input type="text" />
          </FormControl>
          <FormControl id="text">
            <FormLabel>Контакты</FormLabel>
            <Input type="text" />
          </FormControl>
          <FormControl id="text">
            <FormLabel>Город</FormLabel>
            <Input type="text" />
          </FormControl>
          <FormControl id="text">
            <FormLabel>Описание</FormLabel>
            <Textarea placeholder="Here is a sample placeholder" />
          </FormControl>
        </Stack>
      </Flex>
      <Flex flex={1} bg="#DFE1F4">
        <Box p={4}>
          <Stack spacing={4} as={Container} maxW={"xl"} textAlign={"center"}>
            <Heading fontSize={"xl"}>
              Должность
              <Text color={"gray.600"} fontSize={"14px"}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
              </Text>
            </Heading>
            <Heading fontSize={"xl"}>
              Имя
              <Text color={"gray.600"} fontSize={"14px"}>
                Актан
              </Text>
            </Heading>
            <Heading fontSize={"xl"}>
              Фамилия
              <Text color={"gray.600"} fontSize={"14px"}>
                Жапаралиев
              </Text>
            </Heading>
            <Heading fontSize={"xl"}>
              Email
              <Text color={"gray.600"} fontSize={"14px"}>
                aktanjapa@gmail.com
              </Text>
            </Heading>
            <Heading fontSize={"xl"}>
              Страна
              <Text color={"gray.600"} fontSize={"14px"}>
                kyrgyzstan
              </Text>
            </Heading>
            <Heading fontSize={"xl"}>
              Контакты
              <Text color={"gray.600"} fontSize={"14px"}>
                996777777777
              </Text>
            </Heading>
            <Heading fontSize={"xl"}>
              Город
              <Text color={"gray.600"} fontSize={"14px"}>
                Bishkek
              </Text>
            </Heading>
            <Heading fontSize={"xl"}>
              Описание
              <Text color={"gray.600"} fontSize={"14px"}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                veniam sunt deserunt nemo iste blanditiis consectetur alias
                dignissimos ducimus molestias, ipsam quibusdam distinctio cumque
                assumenda odio, in eos provident! Qui. Temporibus ut officia
                soluta libero eos eveniet, nobis iure aperiam veritatis
                voluptatem facere quam iste hic esse nesciunt, nam eaque a
                perspiciatis ab. Molestiae nihil quaerat itaque, tenetur earum
                quis! Odit eos, itaque ipsam explicabo reprehenderit amet ullam
                ducimus, non aspernatur omnis perspiciatis possimus nam quaerat
                doloremque vitae dicta quos aut nesciunt neque doloribus
                accusamus nihil officiis corrupti. Voluptates, molestias? Beatae
                eum, facere quis natus esse sunt quia vero totam possimus
                dolore, recusandae eos, obcaecati earum quidem eius ducimus
                sequi! Quo mollitia reiciendis iste rerum dolores inventore
                perspiciatis corporis distinctio? Dolore consequuntur quisquam
                rerum, ducimus deserunt quo. Adipisci illo ratione dolor
                cupiditate quia dicta sint recusandae voluptate, eligendi
                blanditiis enim quae fugiat esse impedit aliquid labore
                quibusdam reiciendis molestias sed. Fuga placeat corporis sunt
                provident aperiam facilis ea quia! Obcaecati beatae totam dolore
                ipsum autem. Quas libero vitae molestias minus quam, quia,
                perferendis delectus impedit ut, nulla odio officia quis! Vero
                itaque, accusamus fuga officia hic iste totam quam dolores
                molestias quae necessitatibus animi, dignissimos accusantium,
                amet error ipsam. Vel at officiis eveniet alias sit ducimus
                error dolores iusto quae? Fugit eveniet, voluptatem quos rem
                placeat quis dicta, reiciendis labore repudiandae, porro rerum
                tempora. Quibusdam rerum consequuntur iure numquam excepturi, ea
                repellendus ipsum illum est quam, quas soluta, hic earum.
              </Text>
            </Heading>
          </Stack>
        </Box>
      </Flex>
    </Stack>
  );
}
