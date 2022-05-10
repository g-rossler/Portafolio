import {
  Flex, Heading, ButtonGroup, Button, Text,
} from '@chakra-ui/react';

function Home() {
  return (
    <Flex
      direction="column"
      py={30}
      px={5}
      backgroundColor="blue"
      alignItems="center"
    >
      <Heading textAlign="center" py={10}>
        HELLO MY NAME IS GERARDO ROSSLER
      </Heading>
      <Text pb={20}>I&apos;m a front end developer.</Text>
      <ButtonGroup>
        <Button type="button" className="main-introduccion-button button-54">
          PROJECTS
        </Button>
        <Button type="button" className="main-introduccion-button button-54">
          GITHUB
        </Button>
        <Button type="button" className="main-introduccion-button button-54">
          LINKEDIN
        </Button>
      </ButtonGroup>
    </Flex>
  );
}

export default Home;
