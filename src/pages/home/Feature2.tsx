import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  IoAnalyticsSharp,
  IoLogoBitcoin,
  IoSearchSharp,
} from "react-icons/io5";
import { ReactElement } from "react";

interface FeatureProps {
  text: string;
  iconBg: string;
  icon?: ReactElement;
}

const Feature = ({ text, icon, iconBg }: FeatureProps) => {
  return (
    <Stack direction={"row"} align={"center"}>
      <Flex
        w={8}
        h={8}
        align={"center"}
        justify={"center"}
        rounded={"full"}
        bg={iconBg}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

export default function SplitWithImage() {
  return (
    <Container maxW={"5xl"} py={12}>
      <Heading
        // w={"90%"}
        fontWeight={600}
        fontSize={{ base: "2xl", sm: "2xl", md: "4xl" }}
        // lineHeight={"0%"}
        px={10}

        mb={130}
      >
        Оказываем профессиональные услуги для создания идеальной команды на
        современном рынке труда.
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Text
            textTransform={"uppercase"}
            color={"black.900"}
            fontWeight={600}
            fontSize={"sm"}
            // bg={useColorModeValue('blue.50', 'blue.900')}
            p={2}
            alignSelf={"flex-start"}
            rounded={"md"}
          >
            О нас
          </Text>
          <Heading>Стартап Dream Team </Heading>
          <Text color={"gray.500"} fontSize={"lg"}>
            С помощью нашей платформы вы сможете приспособить структуры команды
            для достижения ваших бизнес-целей
          </Text>
          <Text color={"gray.500"} fontSize={"lg"}>
            С помощью нашей платформы вы сможете приспособить структуры команды
            для достижения ваших бизнес-целей
          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.100", "gray.700")}
              />
            }
          ></Stack>
        </Stack>
        <Flex>
          <Image
            rounded={"md"}
            alt={"feature image"}
            src={
              "https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            }
            objectFit={"cover"}
          />
        </Flex>
      </SimpleGrid>
    </Container>
  );
}
