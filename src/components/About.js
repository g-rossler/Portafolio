import {
  Heading,
  VStack,
  Text,
  Button,
  Flex,
  Stack,
  Link,
} from '@chakra-ui/react';

function About() {
  return (
    <VStack
      minW="full"
      bg="rgb(32 32 32)"
      py={0}
      px={[5, 10, 14]}
      h="full"
      minH="100vh"
    >
      <Heading color="#5FE2D1" fontSize={['3xl', '5xl', '5xl']} letterSpacing="3px" as="u">
        About Me
      </Heading>
      <Text
        w="80%"
        textAlign="center"
        fontSize={['xl', '2xl', '2xl']}
        pt={10}
        fontFamily="Roboto Slab"
        color="white"
      >
        Hi! I&apos;m Gerardo Rossler, I&apos;ve been close to a computer since
        an early age, and been passionate about it ever since.
      </Text>
      <Text
        w="80%"
        textAlign="center"
        fontSize={['xl', '2xl', '2xl']}
        mt="0px"
        fontFamily="Roboto Slab"
        color="white"
      >
        I&apos;m a self-taught Software Developer based in Argentina, currently
        looking to get my first job as a front end developer.
      </Text>
      <Text
        w="80%"
        textAlign="center"
        fontSize={['xl', '2xl', '2xl']}
        mt="0px"
        fontFamily="Roboto Slab"
        color="white"
      >
        I love finding solutions to problems and working in a team. Get in touch
        if you&apos;d like to have a chat.
      </Text>
      <Heading color="#5FE2D1" pt={10} fontSize={['3xl', '5xl', '5xl']} letterSpacing="3px" as="u">
        TECHNOLOGIES
      </Heading>
      <Stack w="full" maxW="100%" pt={10}>
        <Flex
          m="auto"
          h="full"
          maxW="100%"
          flexWrap="wrap"
          alignItems="center"
          justifyContent="center"
        >
          <Button variant="terciary">
            <Link href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
              JavaScript
            </Link>
          </Button>
          <Button variant="terciary">
            <Link href="https://developer.mozilla.org/en-US/docs/Web/HTML">
              HTML
            </Link>
          </Button>
          <Button variant="terciary">
            <Link href="https://reactjs.org/">React</Link>
          </Button>
          <Button variant="terciary">
            <Link href="https://developer.mozilla.org/en-US/docs/Web/CSS">
              CSS
            </Link>
          </Button>
          <Button variant="terciary">
            <Link href="https://nodejs.org/en/">Node.JS</Link>
          </Button>
          <Button variant="terciary">
            <Link href="https://www.cypress.io/">Cypress</Link>
          </Button>
          <Button variant="terciary">
            <Link href="https://jquery.com/">jQuery</Link>
          </Button>
          <Button variant="terciary">
            <Link href="https://git-scm.com/">Git</Link>
          </Button>
          <Button variant="terciary">
            <Link href="https://github.com/">GitHub</Link>
          </Button>
          <Button variant="terciary">
            <Link href="https://jestjs.io/">Jest</Link>
          </Button>
          <Button variant="terciary">
            <Link href="https://getbootstrap.com/">BootStrap</Link>
          </Button>
          <Button variant="terciary">
            <Link href="https://chakra-ui.com/">Chakra UI</Link>
          </Button>
          <Button variant="terciary">
            <Link href="https://testing-library.com/docs/react-testing-library/intro/">
              React Testing Libraries
            </Link>
          </Button>
        </Flex>
      </Stack>
    </VStack>
  );
}

export default About;
