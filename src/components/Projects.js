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

import Project from './Project';

import LogoPokedex from '../image/pokedex.png';
import LogoCryptoFutbol from '../image/cryptoFutbol.png';
import LogoPortafolio from '../image/portafolio.png';
import LogoToDoList from '../image/toDoList.png';
import LogoMemotest from '../image/memotest.png';

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
  const portafolioModal = useDisclosure();

  return (
    <VStack
      bg="rgb(32 32 32)"
      pb={20}
      px={[5, 10, 14]}
      h="full"
      minH="100vh"
      spacing={10}
      id="proyectos"
      maxW="1000px"
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
      <Project
        logo={LogoPokedex}
        titulo="Pokedex"
        badge={[
          { text: 'JavaScript', color: 'yellow' },
          { text: 'BootStrap', color: 'purple' },
          { text: 'CSS', color: 'blue' },
          { text: 'HTML 5', color: 'orange' },
          { text: 'REST API', color: 'gray' },
        ]}
        preview="A place where you will find all the information you need about
        pokemons"
        modalTitle="POKEDEX"
        modalText={[
          `This was my first 'big' project, I learnt how to use
        an API for the first time, and I also learnt that doing a 1
        million calls to a server might get you blocked from using the
        API (mistakes happen).`,
          `Another thing that I learnt was to apply modular architecture
        to the project, that helped me find bugs easily and to develop
        new functions quickly. The biggest challenge in this project
        was to apply modular architecture and SOLID principles.`,
          `In the future, I would like to use React, so I can use
        components and state, I would also like to create a search
        bar, and refactor the pagination and the style of the app.`,
        ]}
        linkGithub="https://github.com/g-rossler/Pokedex"
        linkDemo="https://g-rossler.github.io/Pokedex/"
      />
      <Project
        logo={LogoCryptoFutbol}
        titulo="CryptoFutbol"
        badge={[
          { text: 'JavaScript', color: 'yellow' },
          { text: 'BootStrap', color: 'purple' },
          { text: 'CSS', color: 'blue' },
          { text: 'HTML 5', color: 'orange' },
          { text: 'REST API', color: 'gray' },
          { text: 'Stellar Blockchain', color: 'linkedin' },
          { text: 'Parcel', color: 'pink' },
        ]}
        preview="Manage your own football team, play against your friends and win
        tokens on the Stellar blockchain"
        modalTitle="CryptoFutbol"
        modalText={[
          `This project was made with 2 friends for the first
        r/ArgentinaPrograma hackathon, where we came third. The task
        of the hackathon was to make an app that used the Stellar
        blockchain, so we made a game where you can manage a
        football team, play tournaments against other people, buy
        and sell players, improve your club and use the token we
        created called $FTOK (Futbol Token).`,
          `The biggest problem we had working in this project was the
        time, because we only had 2 days to finish the project, and
        there were a lot of things we wanted to include in the demo,
        but we didn't have the time. It was a wonderful
        experience because I enjoy working in a team and learning
        about blockchain technology.`,
        ]}
        linkGithub="https://github.com/g-rossler/CryptoFutbol"
        linkDemo="https://crypto-futbol.vercel.app/"
      />
      <Project
        logo={LogoToDoList}
        titulo="Advency Challenge - Santa's List"
        badge={[
          { text: 'React', color: 'blue' },
          { text: 'Chakra UI', color: 'purple' },
          { text: 'HTML 5', color: 'orange' },
          { text: 'Netlify', color: 'red' },
        ]}
        preview="An app to remember all the gifts you want to give to your loved ones"
        modalTitle="Advency Challenge - Santa's List"
        modalText={[
          `This challenge was made by Goncy (https://github.com/goncy), the objective of the challenge is to make the same app for 24 days, and each day you will add a new feature.
          Right now in the app you can create a gift, specify the receiver, the quantity, and you can add an image of the present.
          You can also edit and delete gifts already created.`,
        ]}
        linkGithub="https://github.com/g-rossler/Adviency-To-Do-List"
        linkDemo="https://advencychallenge.netlify.app/"
      />
      <Project
        logo={LogoMemotest}
        titulo="Memotest"
        badge={[
          { text: 'JavaScript', color: 'yellow' },
          { text: 'Bootstrap', color: 'blue' },
          { text: 'HTML 5', color: 'orange' },
          { text: 'Cypress', color: 'pink' },
        ]}
        preview="A nice and simple game to test your memory skills"
        modalTitle="Memotest"
        modalText={[
          `A game where you need to find the matching colors, you will be able to play in 3 different modes (easy, medium, and hard).
          This project allowed me to understand how to make an integration test with Cypress.`,
        ]}
        linkGithub="https://github.com/g-rossler/Memotest"
        linkDemo="https://g-rossler.github.io/Memotest/"
      />
      <Stack
        direction={{ base: 'column', md: 'row' }}
        border="none"
        borderRadius="10px"
        boxSizing="border-box"
        color="rgb(255, 255, 255)"
        padding="2em 2em"
        position="relative"
        zIndex="0"
        minH="350px"
        _before={{
          minH: '350px',
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
          minH: '350px',
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
                    This was a big project for me, I used React and Chakra UI to
                    make it. In the beginning I was thinking of creating my
                    portfolio with vanilla JavaScript, but at that moment I was
                    just starting to learn React and I loved it.
                  </Text>
                  <Text fontSize="xl" pt="1rem" variant="primary">
                    A little later, one of my friends was talking about how good
                    Chakra UI was, so I tried it and I knew I need it in my
                    portfolio.
                  </Text>
                  <Text fontSize="xl" pt="1rem" variant="primary">
                    The challenge in this project was the style of the web, I
                    did several versions until it looked like I wanted it to.
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
