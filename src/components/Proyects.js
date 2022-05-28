import {
  Stack,
  Heading,
  VStack,
  Image,
  Text,
  Button,
  HStack,
  keyframes,
  Badge,
} from '@chakra-ui/react';

import Logo from '../image/react.svg';

const buttonKeyframes = keyframes`
0% {
  background-position: 0 0;
}
50% {
  background-position: 400% 0;
}
100% {
  background-position: 0 0;
}
`;

function Proyects() {
  return (
    <VStack
      minW="full"
      bg="rgb(32 32 32)"
      py={20}
      px={[0, 10, 14]}
      h="full"
      minH="100vh"
      spacing={10}
    >
      <Heading
        pb={10}
        color="#5FE2D1"
        pt={10}
        fontSize={['3xl', '5xl', '5xl']}
        letterSpacing="3px"
      >
        Proyects
      </Heading>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        border="none"
        borderRadius="10px"
        boxSizing="border-box"
        color="rgb(255, 255, 255)"
        padding="0.6em 2em"
        position="relative"
        zIndex="0"
        w="90%"
        _before={{
          content: '""',
          bg: 'linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000)',
          position: 'absolute',
          top: '-2px',
          left: '-2px',
          backgroundSize: '400%',
          zIndex: '-1',
          filter: 'blur(5px)',
          width: 'calc(100% + 4px)',
          height: 'calc(100% + 4px)',
          animation: `${buttonKeyframes} 50s linear infinite`,
          transition: 'opacity 0.1s ease-in-out',
          borderRadius: '10px',
        }}
        _after={{
          zIndex: '-1',
          content: '""',
          position: 'absolute',
          width: '100%',
          height: '100%',
          background: 'rgb(0, 0, 0)',
          left: '0',
          top: '0',
          borderRadius: '10px',
        }}
      >
        <Stack
          align="center"
          justify="center"
          maxW={{ base: '100%', md: '50%' }}
          minW="50%"
        >
          <Image src={Logo} />
        </Stack>
        <VStack w="full" pt={3} minH="100%">
          <Heading textAlign="center" fontSize={['2xl', '2xl', '3xl']}>
            Pokedex
          </Heading>
          <Stack direction="row">
            <Badge colorScheme="blue">JavaScript</Badge>
            <Badge colorScheme="cyan">BootStrap</Badge>
            <Badge colorScheme="twitter">API</Badge>
          </Stack>
          <Text>TO DO</Text>
          <HStack align="end" h="full" py={3}>
            <Button variant="terciarySmall">DEMO</Button>
            <Button variant="terciarySmall">GITHUB</Button>
            <Button variant="terciarySmall">+INFO</Button>
          </HStack>
        </VStack>
      </Stack>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        border="none"
        borderRadius="10px"
        boxSizing="border-box"
        color="rgb(255, 255, 255)"
        padding="0.6em 2em"
        position="relative"
        zIndex="0"
        w="90%"
        _before={{
          content: '""',
          bg: 'linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000)',
          position: 'absolute',
          top: '-2px',
          left: '-2px',
          backgroundSize: '400%',
          zIndex: '-1',
          filter: 'blur(5px)',
          width: 'calc(100% + 4px)',
          height: 'calc(100% + 4px)',
          animation: `${buttonKeyframes} 50s linear infinite`,
          transition: 'opacity 0.1s ease-in-out',
          borderRadius: '10px',
        }}
        _after={{
          zIndex: '-1',
          content: '""',
          position: 'absolute',
          width: '100%',
          height: '100%',
          background: 'rgb(0, 0, 0)',
          left: '0',
          top: '0',
          borderRadius: '10px',
        }}
      >
        <Stack
          align="center"
          justify="center"
          maxW={{ base: '100%', md: '50%' }}
          minW="50%"
        >
          <Image src={Logo} />
        </Stack>
        <VStack w="full" pt={3} minH="100%">
          <Heading textAlign="center" fontSize={['2xl', '2xl', '3xl']}>
            Pokedex
          </Heading>
          <Stack direction="row">
            <Badge colorScheme="blue">JavaScript</Badge>
            <Badge colorScheme="cyan">BootStrap</Badge>
            <Badge colorScheme="twitter">API</Badge>
          </Stack>
          <Text>TO DO</Text>
          <HStack align="end" h="full" py={3}>
            <Button variant="terciarySmall">DEMO</Button>
            <Button variant="terciarySmall">GITHUB</Button>
            <Button variant="terciarySmall">+INFO</Button>
          </HStack>
        </VStack>
      </Stack>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        border="none"
        borderRadius="10px"
        boxSizing="border-box"
        color="rgb(255, 255, 255)"
        padding="0.6em 2em"
        position="relative"
        zIndex="0"
        w="90%"
        _before={{
          content: '""',
          bg: 'linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000)',
          position: 'absolute',
          top: '-2px',
          left: '-2px',
          backgroundSize: '400%',
          zIndex: '-1',
          filter: 'blur(5px)',
          width: 'calc(100% + 4px)',
          height: 'calc(100% + 4px)',
          animation: `${buttonKeyframes} 50s linear infinite`,
          transition: 'opacity 0.1s ease-in-out',
          borderRadius: '10px',
        }}
        _after={{
          zIndex: '-1',
          content: '""',
          position: 'absolute',
          width: '100%',
          height: '100%',
          background: 'rgb(0, 0, 0)',
          left: '0',
          top: '0',
          borderRadius: '10px',
        }}
      >
        <Stack
          align="center"
          justify="center"
          maxW={{ base: '100%', md: '50%' }}
          minW="50%"
        >
          <Image src={Logo} />
        </Stack>
        <VStack w="full" pt={3} minH="100%">
          <Heading textAlign="center" fontSize={['2xl', '2xl', '3xl']}>
            Pokedex
          </Heading>
          <Stack direction="row">
            <Badge colorScheme="blue">JavaScript</Badge>
            <Badge colorScheme="cyan">BootStrap</Badge>
            <Badge colorScheme="twitter">API</Badge>
          </Stack>
          <Text>TO DO</Text>
          <HStack align="end" h="full" py={3}>
            <Button variant="terciarySmall">DEMO</Button>
            <Button variant="terciarySmall">GITHUB</Button>
            <Button variant="terciarySmall">+INFO</Button>
          </HStack>
        </VStack>
      </Stack>
    </VStack>
  );
}

export default Proyects;
