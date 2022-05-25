import {
  Heading,
  VStack,
  Text,
  Button,
  Flex,
  Stack,
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
      spacing={10}
    >
      <Heading>About Me</Heading>
      <Text w="full">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Text>
      <Heading>TECHNOLOGIES</Heading>
      <Stack w="full" maxW="100%">
        <Flex m="auto" h="full" maxW="100%" flexWrap="wrap" alignItems="center" justifyContent="center">
          <Button variant="terciary">JavaScript</Button>
          <Button variant="terciary">HTML</Button>
          <Button variant="terciary">React</Button>
          <Button variant="terciary">CSS</Button>
          <Button variant="terciary">Node.JS</Button>
          <Button variant="terciary">Cypress</Button>
          <Button variant="terciary">jQuery</Button>
          <Button variant="terciary">Git</Button>
          <Button variant="terciary">GitHub</Button>
          <Button variant="terciary">Jest</Button>
          <Button variant="terciary">BootStrap</Button>
          <Button variant="terciary">Chakra UI</Button>
          <Button variant="terciary">React Testing Libraries</Button>
        </Flex>
      </Stack>
    </VStack>
  );
}

export default About;
