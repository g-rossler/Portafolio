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
import LogoCryptoFutbol from '../image/cryptoFutbol.png';
import LogoPortafolio from '../image/portafolio.png';

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
  const pokedexModal = useDisclosure();
  const cryptoFutbolModal = useDisclosure();
  const portafolioModal = useDisclosure();

  return (
    <VStack
      minW="full"
      bg="rgb(32 32 32)"
      py={20}
      px={[0, 10, 14]}
      h="full"
      minH="100vh"
      spacing={10}
      id="proyectos"
      maxW="100vw"
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
            <Link href="https://g-rossler.github.io/Pokedex/">
              <Button variant="terciarySmall">DEMO</Button>
            </Link>
            <Link href="https://github.com/g-rossler/Pokedex">
              <Button variant="terciarySmall">GITHUB</Button>
            </Link>
            <Button variant="terciarySmall" onClick={pokedexModal.onOpen}>
              +INFO
            </Button>
            <Modal
              isOpen={pokedexModal.isOpen}
              onClose={pokedexModal.onClose}
              size="md"
            >
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
                  <Button
                    colorScheme="blue"
                    mr={3}
                    onClick={pokedexModal.onClose}
                    w="full"
                  >
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
          <Image src={LogoCryptoFutbol} border="1px solid gray" />
        </Stack>
        <VStack w="full" pt={3} minH="100%">
          <Heading textAlign="center" fontSize={['2xl', '2xl', '3xl']}>
            CryptoFutbol
          </Heading>
          <Stack
            direction="row"
            maxW="100%"
            display="flex"
            flexWrap="wrap"
            justifyContent="center"
            alignItems="center"
          >
            <Badge variant="subtle" colorScheme="yellow" fontSize="1em">
              JavaScript
            </Badge>
            <Badge variant="subtle" colorScheme="blue" fontSize="1em">
              CSS
            </Badge>
            <Badge variant="subtle" colorScheme="orange" fontSize="1em" m="5">
              HTML 5
            </Badge>
            <Badge variant="subtle" colorScheme="purple" fontSize="1em">
              BootStrap
            </Badge>
            <Badge variant="subtle" fontSize="1em">
              REST API
            </Badge>
            <Badge variant="subtle" fontSize="1em" colorScheme="linkedin">
              Stellar Blockchain
            </Badge>
            <Badge variant="subtle" fontSize="1em" colorScheme="pink">
              Parcel
            </Badge>
          </Stack>
          <Text fontSize="xl" w="80%" paddingTop="0.8rem" textAlign="center">
            Manage your own football team, play against your friends and win
            tokens on Stellar blockchain.
          </Text>
          <HStack align="end" h="full" py={3} spacing="24px">
            <Link href="https://crypto-futbol.vercel.app/">
              <Button variant="terciarySmall">DEMO</Button>
            </Link>

            <Link href="https://github.com/g-rossler/CryptoFutbol">
              <Button variant="terciarySmall">GITHUB</Button>
            </Link>

            <Button variant="terciarySmall" onClick={cryptoFutbolModal.onOpen}>
              +INFO
            </Button>
            <Modal
              isOpen={cryptoFutbolModal.isOpen}
              onClose={cryptoFutbolModal.onClose}
              size="md"
            >
              <ModalOverlay />
              <ModalContent>
                <ModalHeader textAlign="center" fontSize="4xl">
                  CryptoFutbol
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Text fontSize="xl" variant="primary">
                    This project was made with 2 friends for the first
                    r/ArgentinaPrograma hackathon, where we came third. The task
                    of the hackathon was to make an app that use Stellar
                    blockchain, so we made a game where you can manage a
                    football team, play tournaments against other people, buy
                    and sell players, improve your club and use the token we
                    created call $FTOK (Futbol Token).
                  </Text>
                  <Text fontSize="xl" pt="1rem" variant="primary">
                    The biggest problem we had working in this project was the
                    time, because we only have 2 day to finish the project, and
                    there were a lot of things we want to include in the demo,
                    but we didn&apos;t have the time. It was a wonderful
                    experience because I enjoy working in a team and learning
                    about blockchain technology.
                  </Text>
                </ModalBody>

                <ModalFooter>
                  <Button
                    colorScheme="blue"
                    mr={3}
                    onClick={cryptoFutbolModal.onClose}
                    w="full"
                  >
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
          <Image src={LogoPortafolio} border="1px solid gray" />
        </Stack>
        <VStack w="full" pt={3} minH="100%">
          <Heading textAlign="center" fontSize={['2xl', '2xl', '3xl']}>
            Portfolio
          </Heading>
          <Stack
            direction="row"
            maxW="100%"
            display="flex"
            flexWrap="wrap"
            justifyContent="center"
            alignItems="center"
          >
            <Badge variant="subtle" colorScheme="yellow" fontSize="1em">
              JavaScript
            </Badge>
            <Badge variant="subtle" colorScheme="blue" fontSize="1em">
              CSS
            </Badge>
            <Badge variant="subtle" colorScheme="orange" fontSize="1em" m="5">
              HTML 5
            </Badge>
            <Badge variant="subtle" colorScheme="purple" fontSize="1em">
              Chakra UI
            </Badge>
            <Badge variant="subtle" colorScheme="blue" fontSize="1em">
              React
            </Badge>
          </Stack>
          <Text fontSize="xl" w="80%" paddingTop="0.8rem" textAlign="center">
            My Portfolio
          </Text>
          <HStack align="end" h="full" py={3} spacing="24px">
            <Link href="https://github.com/g-rossler/Portafolio">
              <Button variant="terciarySmall">GITHUB</Button>
            </Link>

            <Button variant="terciarySmall" onClick={portafolioModal.onOpen}>
              +INFO
            </Button>
            <Modal
              isOpen={portafolioModal.isOpen}
              onClose={portafolioModal.onClose}
              size="md"
            >
              <ModalOverlay />
              <ModalContent>
                <ModalHeader textAlign="center" fontSize="4xl">
                  Portfolio
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Text fontSize="xl" variant="primary">
                    This was a big project for me, I use React and Chakra UI to
                    make it. In the beginning I was thinking of creating my
                    portfolio with JavaScript, but at that moment I was just
                    starting to learn React and I love it.
                  </Text>
                  <Text fontSize="xl" pt="1rem" variant="primary">
                    A little later, one of my friends was talking about how good
                    was Chakra UI, so I try it and I knew I need it in my
                    portfolio.
                  </Text>
                  <Text fontSize="xl" pt="1rem" variant="primary">
                    The challenge in this project was the style of the web, I
                    did several versions until it look like I want it.
                  </Text>
                </ModalBody>

                <ModalFooter>
                  <Button
                    colorScheme="blue"
                    mr={3}
                    onClick={portafolioModal.onClose}
                    w="full"
                  >
                    Close
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </HStack>
        </VStack>
      </Stack>
    </VStack>
  );
}

export default Projects;
