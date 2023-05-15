import { Box, Heading, Img, Text } from "@chakra-ui/react";

const AboutUs = () => {
    return (
        <Box py={12}>
            <Box p={8} color="#011528" maxW={'80%'} mx={'auto'}>
                <Heading as="h2" size="xl" mb={4}>
                    About DreamTeam
                </Heading>
                {/* <Box display={'grid'} mx={4} gridTemplateColumns={'1fr 3fr'}>
                    <Box >
                        <Box display={'flex'} justifyContent={'center'}>
                            <Img src="/ceo.jpg" alt='Nuradil' borderRadius={10} />
                        </Box>
                        <Box display={'flex'} justifyContent={'center'}><Text>Ur CEO</Text></Box>
                    </Box> */}
                    <Box p={4} mx={4} my={12}>
                        <Text fontSize="lg">
                            DreamTeam is a revolutionary startup that connects businesses and
                            software development teams. We understand the challenges faced by
                            businesses in finding the right talent and by developers in finding
                            meaningful projects.
                        </Text>
                        <Text fontSize="lg" mt={4}>
                            Our platform provides a seamless experience for businesses to find the
                            perfect team for their project and for talented programmers to discover
                            exciting opportunities.
                        </Text>
                        <Text fontSize="lg" mt={4}>
                            With DreamTeam, businesses can access a pool of highly skilled and
                            vetted developers, while programmers can explore a wide range of
                            projects that match their expertise and interests.
                        </Text>
                        <Text fontSize="lg" mt={4}>
                            Join us today and be a part of the future of collaboration between
                            businesses and programmers. Let's build dreams together!
                        </Text>
                    </Box>
                {/* </Box> */}
            </Box>
        </Box>
    );
};

export default AboutUs;
