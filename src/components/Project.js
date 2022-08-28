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

function Project({
  logo,
  title,
  badge,
  preview,
  modalTitle,
  modalText,
  linkGithub,
  linkDemo,
}) {
  const modal = useDisclosure();

  return (
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
      minW="350px"
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
        <Image src={logo} border="1px solid gray" />
      </Stack>
      <VStack w="full" pt={3} minH="100%">
        <Heading textAlign="center" fontSize={['2xl', '2xl', '3xl']}>
          {title}
        </Heading>
        <Stack
          direction="row"
          maxW="100%"
          display="flex"
          flexWrap="wrap"
          justifyContent="center"
          alignItems="center"
          minH="60px"
        >
          {badge.map((elem) => (
            <Badge variant="subtle" colorScheme={elem.color} fontSize="1em" key={elem.text}>
              {elem.text}
            </Badge>
          ))}
        </Stack>
        <Text fontSize="xl" w="80%" paddingTop="0.8rem" textAlign="center">
          {preview}
        </Text>
        <HStack align="end" h="full" py={3} spacing="10px">
          {linkDemo && (
          <Link href={linkDemo}>
            <Button variant="terciarySmall">DEMO</Button>
          </Link>
          )}

          <Link href={linkGithub}>
            <Button variant="terciarySmall">GITHUB</Button>
          </Link>
          <Button variant="terciarySmall" onClick={modal.onOpen}>
            +INFO
          </Button>
          <Modal isOpen={modal.isOpen} onClose={modal.onClose} size="md">
            <ModalOverlay />
            <ModalContent>
              <ModalHeader textAlign="center" fontSize="4xl">
                {modalTitle}
              </ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                {modalText.map((elem) => (
                  <Text fontSize="xl" pt="1rem" variant="primary" key={elem}>
                    {elem}
                  </Text>
                ))}
              </ModalBody>

              <ModalFooter>
                <Button
                  colorScheme="blue"
                  mr={3}
                  onClick={modal.onClose}
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
  );
}

export default Project;
