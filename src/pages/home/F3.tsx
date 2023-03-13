import {
  Container,
  Grid,
  Stack,
  Icon,
  Box,
  Text,
  Heading,
  Button,
} from "@chakra-ui/react";

function StatsTitleDescription() {
  return (
    <Container my={50} py={10} maxW={"container.lg"}>
      <Grid
      // templateColumns={{
      //   base: "repeat(1, 1fr)",
      //   sm: "repeat(2, 1fr)",
      //   md: "repeat(4, 1fr)",
      // }}
      // gap={6}
      >
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}
        >
          <Heading
            // w={"90%"}
            fontWeight={600}
            fontSize={{ base: "3xl", sm: "3xl", md: "5xl" }}
            // lineHeight={"120%"}
          >
            Присоединяйтись к нам!
            <br />
            <Text fontSize="14px" as={"span"}>
              Обьедините лучшие таланты и идеи в одну команду
              с помощью нашей уникальной платформы
            </Text>
          </Heading>
          {/* <Text color={"gray.500"}>
            Зарегистрируйтесь сейчас и ощутите все преимущества нашего
            веб-сайта.
          </Text> */}

          <Stack
            direction={"column"}
            spacing={3}
            align={"center"}
            alignSelf={"center"}
            position={"relative"}
          >
            <Button
              // colorScheme={"green"}
              // bg={"green.400"}
              rounded={"full"}
              border={"1px solid white"}
              borderRadius={"10px"}
              py={6}
              px={10}
              _hover={{
                bg: "white.500",
              }}
            >
              Создать команду
            </Button>
            <Box>
            </Box>
          </Stack>
        </Stack>
      </Grid>
    </Container>
  );
}

export default StatsTitleDescription;
