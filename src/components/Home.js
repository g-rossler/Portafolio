import {
  VStack,
  Heading,
  Button,
  Text,
  ButtonGroup,
  Stack,
  Image,
  HStack,
  keyframes,
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
    <VStack minW={80} bg="black" pt={100} px={10} h="100vh">
      <HStack spacing={10}>
        <VStack w="full" alignItems="flex-start" minW={600}>
          <Text
            pl={0.5}
            color="white"
            letterSpacing="1.5px"
            textAlign="start"
            fontSize="3xl"
            w="full"
          >
            My name is:
          </Text>
          <Heading
            w="full"
            textAlign="start"
            color="#5FE2D1"
            size="4xl"
            letterSpacing="3px"
          >
            Rossler Gerardo
          </Heading>
          <Text
            letterSpacing="1.5px"
            pl={1.5}
            color="white"
            fontSize="3xl"
            textAlign="start"
            w="full"
            pt={50}
          >
            I&apos;m a Front End Developer.
          </Text>
        </VStack>
        <Image
          src={Logo}
          h="full"
          w="full"
          className="logo"
          animation={animation}
        />
      </HStack>

      <Stack alignItems="center" pt={20}>
        <ButtonGroup spacing={10} variant="primary">
          <Button type="button">PROJECTS</Button>
          <Button type="button">GITHUB</Button>
          <Button type="button">LINKEDIN</Button>
        </ButtonGroup>
      </Stack>
    </VStack>
  );
}

export default Home;
