import {
  Heading,
  VStack,
  Text,
  Button,
  Flex,
  Stack,
  Link,
} from "@chakra-ui/react";

function About() {
  return (
    <VStack
      bg="rgb(32 32 32)"
      py={10}
      px={[5, 10, 14]}
      h="full"
      minH="100vh"
      maxW="1000px"
    >
      <Heading
        color="#5FE2D1"
        fontSize={["3xl", "5xl", "5xl"]}
        letterSpacing="3px"
        as="u"
      >
        About Me
      </Heading>
      <Text
        w="80%"
        textAlign="center"
        fontSize={["xl", "2xl", "2xl"]}
        pt={10}
        pb={10}
        fontFamily="Roboto Slab"
        color="white"
      >
        As a dedicated Full Stack Developer with two years of experience, I
        specialize in JavaScript, TypeScript, Node.js, Nest.js, React, React
        Native, and AWS. My professional journey has equipped me with a strong
        foundation in both backend and frontend development.
      </Text>
      <Text
        w="80%"
        textAlign="center"
        fontSize={["xl", "2xl", "2xl"]}
        mt="0px"
        pb={10}
        fontFamily="Roboto Slab"
        color="white"
      >
        In my recent role, I played a crucial part in developing a fintech
        application, where I was responsible for system setup, deployment, and
        frontend and backend development. This role allowed me to refine my
        skills in designing and implementing efficient, scalable, and
        user-centric solutions.
      </Text>
      <Text
        w="80%"
        textAlign="center"
        fontSize={["xl", "2xl", "2xl"]}
        mt="0px"
        fontFamily="Roboto Slab"
        color="white"
      >
        I am passionate about continuous learning and staying abreast of the
        latest technological advancements, ensuring that my skills remain at the
        cutting edge of the industry.
      </Text>
      <Heading
        color="#5FE2D1"
        pt={20}
        fontSize={["3xl", "5xl", "5xl"]}
        letterSpacing="3px"
        as="u"
      >
        TECHNOLOGIES, TOOLS AND MORE
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
          <Link
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            isExternal
          >
            <Button variant="terciary">JavaScript</Button>
          </Link>
          <Link href="https://nestjs.com/" isExternal>
            <Button variant="terciary">Nest JS</Button>
          </Link>
          <Link href="https://aws.amazon.com/" isExternal>
            <Button variant="terciary">AWS</Button>
          </Link>
          <Link href="https://reactjs.org/" isExternal>
            <Button variant="terciary">React</Button>
          </Link>
          <Link href="https://www.mongodb.com/" isExternal>
            <Button variant="terciary">MongoDB</Button>
          </Link>
          <Link href="https://www.mysql.com/" isExternal>
            <Button variant="terciary">MySQL</Button>
          </Link>
          <Link href="https://www.docker.com/" isExternal>
            <Button variant="terciary">Docker</Button>
          </Link>
          <Link href="https://nodejs.org/en/" isExternal>
            <Button variant="terciary">Node.JS</Button>
          </Link>
          <Link href="https://www.typescriptlang.org/" isExternal>
            <Button variant="terciary">TypeScript</Button>
          </Link>
          <Link href="https://stellar.org/" isExternal>
            <Button variant="terciary">Stellar Blockchain</Button>
          </Link>
          <Link
            href="https://developer.mozilla.org/en-US/docs/Web/HTML"
            isExternal
          >
            <Button variant="terciary">HTML</Button>
          </Link>
          <Link
            href="https://developer.mozilla.org/en-US/docs/Web/CSS"
            isExternal
          >
            <Button variant="terciary">CSS</Button>
          </Link>
          <Link href="https://www.cypress.io/" isExternal>
            <Button variant="terciary">Cypress</Button>
          </Link>
          <Link href="https://jquery.com/" isExternal>
            <Button variant="terciary">jQuery</Button>
          </Link>
          <Link href="https://git-scm.com/" isExternal>
            <Button variant="terciary">Git</Button>
          </Link>
          <Link href="https://jestjs.io/" isExternal>
            <Button variant="terciary">Jest</Button>
          </Link>
          <Link href="https://getbootstrap.com/" isExternal>
            <Button variant="terciary">BootStrap</Button>
          </Link>
          <Link href="https://chakra-ui.com/" isExternal>
            <Button variant="terciary">Chakra UI</Button>
          </Link>
          <Link
            href="https://testing-library.com/docs/react-testing-library/intro/"
            isExternal
          >
            <Button variant="terciary">React Testing Libraries</Button>
          </Link>
        </Flex>
      </Stack>
    </VStack>
  );
}

export default About;
