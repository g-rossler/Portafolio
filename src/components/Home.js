import {
  VStack,
  Heading,
  Button,
  Text,
  ButtonGroup,
  Stack,
} from '@chakra-ui/react';

function Home() {
  return (
    <VStack w="full" bg="black" py={20} px={100} h="100vh">
      <VStack w="full" ml={20} mt={20} alignItems="flex-start">
        <Text
          pl={1.5}
          color="white"
          letterSpacing="1px"
          textAlign="start"
          fontSize="2xl"
          w="full"
        >
          My name is:
        </Text>
        <Heading
          w="full"
          textAlign="start"
          color="#5FE2D1"
          size="4xl"
          letterSpacing="3px"
        >
          Rossler Gerardo
        </Heading>
        <Text
          letterSpacing="1px"
          pl={1.5}
          color="white"
          fontSize="2em"
          textAlign="start"
          w="full"
          pt={50}
        >
          I&apos;m a Front End Developer.
        </Text>
      </VStack>
      <Stack alignItems="center" pt={20}>
        <ButtonGroup spacing={10} variant="primary">
          <Button type="button">PROJECTS</Button>
          <Button type="button">GITHUB</Button>
          <Button type="button">LINKEDIN</Button>
        </ButtonGroup>
      </Stack>
    </VStack>
  );
}

export default Home;
