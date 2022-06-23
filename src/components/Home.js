import {
  VStack,
  Heading,
  Button,
  Text,
  Stack,
  Image,
  HStack,
  keyframes,
  Box,
} from '@chakra-ui/react';

import Logo from '../image/react.svg';
import '../themes/styles.css';

function Home() {
  const animationKeyframes = keyframes`
  0% { transform: scale(1) rotate(0); border-radius: 50%; }
  25% { transform: scale(1) rotate(90deg); border-radius: 50%; }
  50% { transform: scale(1) rotate(180deg); border-radius: 50%; }
  75% { transform: scale(1) rotate(270deg); border-radius: 50%; }
  100% { transform: scale(1) rotate(360deg); border-radius: 50%; }
`;

  const animation = `${animationKeyframes} 20s linear infinite`;

  return (
    <VStack
      minW="full"
      bg="rgb(32 32 32)"
      py={[14, 20, 24]}
      px={[5, 10, 14]}
      h="full"
      minH="100vh"
    >
      <HStack spacing={10} w="full">
        <VStack w="full" alignItems="flex-start">
          <Text
            pl={0.5}
            color="white"
            letterSpacing="1.5px"
            textAlign="start"
            fontSize={['2xl', '3xl', '4xl']}
            w="full"
          >
            My name is:
          </Text>
          <Heading
            w="full"
            textAlign="start"
            color="#5FE2D1"
            fontSize={['5xl', '6xl', '7xl']}
            letterSpacing="3px"
          >
            Rossler Gerardo
          </Heading>
          <Text
            letterSpacing="1.5px"
            pl={1.5}
            color="white"
            fontSize={['2xl', '3xl', '4xl']}
            textAlign="start"
            w="full"
          >
            I&apos;m a Front End Developer.
          </Text>
        </VStack>
        <Box align="center" ml={0} w="full" p="10px">
          <Image src={Logo} className="logo" animation={animation} />
        </Box>
      </HStack>

      <Stack
        justify="center"
        align="center"
        pt={[16, 10, 20]}
        direction={{ base: 'column', md: 'row' }}
        spacing={3}
        h="full"
        w="full"
      >
        <Button type="button" variant="primary">
          PROJECTS
        </Button>
        <Button type="button" variant="primary">
          GITHUB
        </Button>
        <Button type="button" variant="primary">
          LINKEDIN
        </Button>
      </Stack>
    </VStack>
  );
}

export default Home;
