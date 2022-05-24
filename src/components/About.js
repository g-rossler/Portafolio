import {

  Heading,
  VStack,
  Stack,
  Text,
  ButtonGroup,
  Button,

} from '@chakra-ui/react';

function About() {
  return (
    <VStack
      border="1px solid white"
      minW="full"
      bg="rgb(32 32 32)"
      py={[14, 20, 24]}
      px={[5, 10, 14]}
      h="full"
      minH="100vh"
    >
      <Heading>About Me</Heading>
      <Stack direction={{ base: 'column', md: 'row' }} w="full" align="center" justify="space">
        <Stack>
          <Text>Hola</Text>
        </Stack>
        <VStack>
          <Heading>TECHNOLOGIES</Heading>
          <ButtonGroup variant="outline" spacing="6">
            <Button colorScheme="blue">Save</Button>
            <Button>Cancel</Button>
          </ButtonGroup>
        </VStack>
      </Stack>
    </VStack>
  );
  /*
    <section id="main-about-me">
      <h2 id="main-about-me-title">ABOUT ME</h2>
      <p id="main-about-me-subtitle">I am a software developer</p>
      <div id="main-technologies">
        <h2 id="main-technologies-title">TECHNOLOGIES</h2>
        <div id="main-technologies-list">
          <div className="main-technologies-list-item">HTML</div>
          <div className="main-technologies-list-item">JavaScript</div>
          <div className="main-technologies-list-item">CSS</div>
          <div className="main-technologies-list-item">React</div>
          <div className="main-technologies-list-item">Node.JS</div>
          <div className="main-technologies-list-item">Cypress</div>
          <div className="main-technologies-list-item">NPM</div>
          <div className="main-technologies-list-item">Babel</div>
          <div className="main-technologies-list-item">jQuery</div>
          <div className="main-technologies-list-item">Git</div>
          <div className="main-technologies-list-item">GitHub</div>
          <div className="main-technologies-list-item">Jest</div>
          <div className="main-technologies-list-item">BootStrap</div>
        </div>
      </div>
</section> */
}

export default About;
