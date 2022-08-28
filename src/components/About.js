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
      bg="rgb(32 32 32)"
      py={10}
      px={[5, 10, 14]}
      h="full"
      m="auto"
      minH="100vh"
      maxW="1000px"
    >
      <Heading
        color="#5FE2D1"
        fontSize={['3xl', '5xl', '5xl']}
        letterSpacing="3px"
        as="u"
      >
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
      <Heading
        color="#5FE2D1"
        pt={10}
        fontSize={['3xl', '5xl', '5xl']}
        letterSpacing="3px"
        as="u"
      >
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
          <Link href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
            <Button variant="terciary">JavaScript</Button>
          </Link>
          <Link href="https://developer.mozilla.org/en-US/docs/Web/HTML">
            <Button variant="terciary">HTML</Button>
          </Link>
          <Link href="https://reactjs.org/">
            <Button variant="terciary">React</Button>
          </Link>
          <Link href="https://developer.mozilla.org/en-US/docs/Web/CSS">
            <Button variant="terciary">CSS</Button>
          </Link>
          <Link href="https://nodejs.org/en/">
            <Button variant="terciary">Node.JS</Button>
          </Link>
          <Link href="https://www.typescriptlang.org/">
            <Button variant="terciary">TypeScript</Button>
          </Link>
          <Link href="https://www.cypress.io/">
            <Button variant="terciary">Cypress</Button>
          </Link>
          <Link href="https://jquery.com/">
            <Button variant="terciary">jQuery</Button>
          </Link>
          <Link href="https://git-scm.com/">
            <Button variant="terciary">Git</Button>
          </Link>
          <Link href="https://github.com/">
            <Button variant="terciary">GitHub</Button>
          </Link>
          <Link href="https://jestjs.io/">
            <Button variant="terciary">Jest</Button>
          </Link>
          <Link href="https://getbootstrap.com/">
            <Button variant="terciary">BootStrap</Button>
          </Link>
          <Link href="https://chakra-ui.com/">
            <Button variant="terciary">Chakra UI</Button>
          </Link>
          <Link href="https://testing-library.com/docs/react-testing-library/intro/">
            <Button variant="terciary">React Testing Libraries</Button>
          </Link>
        </Flex>
      </Stack>
    </VStack>
  );
}

export default About;
