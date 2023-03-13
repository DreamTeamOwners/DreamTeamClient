import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Icon,
  useColorModeValue,
  createIcon,
  useColorMode,
} from '@chakra-ui/react';
import { lazy, Suspense } from 'react';
import VoxelDogLoader from '~/shared/3d/voxel-dog-loader';

const LazyVoxelDog = lazy(() => import('~/shared/3d/voxel-dog'));

export function HomePage() {
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')}>
        <Container maxW={'container.sm'}>
          <Stack
            as={Box}
            textAlign={'center'}
            spacing={{ base: 8, md: 14 }}
            py={{ base: 20, md: 36 }}
          >
            <Heading
              fontWeight={600}
              fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
              lineHeight={'110%'}
            >
              Соберите <br />
              <Text as={'span'} color={'green.400'}>
                идеальную команду
              </Text>
              {/* ======================== */}
              <Suspense fallback={<VoxelDogLoader />}>
                <LazyVoxelDog />
              </Suspense>
              {/* ============================ */}
              <br />
              <Text fontSize={{ base: 'xl', sm: 'xl', md: 'xl' }} as={'span'}>
                для успешной работы на современном рынке.
              </Text>
            </Heading>
            <Text color={'gray.500'}>
              Зарегистрируйтесь сейчас и ощутите все преимущества нашего веб-сайта.
            </Text>

            <Stack
              direction={'column'}
              spacing={3}
              align={'center'}
              alignSelf={'center'}
              position={'relative'}
            >
              <Button
                colorScheme={'green'}
                bg={'green.400'}
                rounded={'full'}
                px={6}
                _hover={{
                  bg: 'green.500',
                }}
              >
                Get Started
              </Button>
              <Button variant={'link'} colorScheme={'blue'} size={'sm'}>
                Learn more
              </Button>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </>
  );
}
