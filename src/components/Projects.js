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
  Link,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react';

import LogoPokedex from '../image/pokedex.png';

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

function Projects() {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
        as="u"
      >
        Projects
      </Heading>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        border="none"
        borderRadius="10px"
        boxSizing="border-box"
        color="rgb(255, 255, 255)"
        padding="2em 2em"
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
          <Image src={LogoPokedex} border="1px solid gray" />
        </Stack>
        <VStack w="full" pt={3} minH="100%">
          <Heading textAlign="center" fontSize={['2xl', '2xl', '3xl']}>
            Pokedex
          </Heading>
          <Stack direction="row">
            <Badge variant="subtle" colorScheme="yellow" fontSize="1em">
              JavaScript
            </Badge>
            <Badge variant="subtle" colorScheme="purple" fontSize="1em">
              BootStrap
            </Badge>
            <Badge variant="subtle" colorScheme="blue" fontSize="1em">
              CSS
            </Badge>
            <Badge variant="subtle" colorScheme="orange" fontSize="1em">
              HTML 5
            </Badge>
            <Badge variant="subtle" fontSize="1em">
              REST API
            </Badge>
          </Stack>
          <Text fontSize="xl" w="80%" paddingTop="0.8rem" textAlign="center">
            A place where you will find all the information you need about
            pokemons
          </Text>
          <HStack align="end" h="full" py={3} spacing="24px">
            <Button variant="terciarySmall">
              <Link href="https://g-rossler.github.io/Pokedex/">DEMO</Link>
            </Button>
            <Button variant="terciarySmall">
              <Link href="https://github.com/g-rossler/Pokedex">GITHUB</Link>
            </Button>
            <Button variant="terciarySmall" onClick={onOpen}>
              +INFO
            </Button>
            <Modal isOpen={isOpen} onClose={onClose} size="md">
              <ModalOverlay />
              <ModalContent>
                <ModalHeader textAlign="center" fontSize="4xl">
                  POKEDEX
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Text fontSize="xl" variant="primary">
                    This was my first &apos;big&apos; project, I learn how to
                    use an API for the first time, and I also learn that doing a
                    1 million calls to a server might get you block from using
                    the API (mistakes happens).
                  </Text>
                  <Text fontSize="xl" pt="1rem" variant="primary">
                    Another thing that I learn was to apply modular architecture
                    to the project, that help me find bugs easily and to develop
                    new functions quickly. The biggest challenger in this
                    proyect was to apply modular architecture and SOLID
                    principles.
                  </Text>
                  <Text fontSize="xl" pt="1rem" variant="primary">
                    In the future, I would like to use React, so I can use
                    components and state, I will also like to create a search
                    bar, and remake the pagination and the style of the app.
                  </Text>
                </ModalBody>

                <ModalFooter>
                  <Button colorScheme="blue" mr={3} onClick={onClose} w="full">
                    Close
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
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
          <Image src={LogoPokedex} />
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
          <Image src={LogoPokedex} />
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

export default Projects;
