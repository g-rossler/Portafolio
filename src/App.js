import { Container, ChakraProvider } from '@chakra-ui/react';
import Home from './components/Home';

function App() {
  return (
    <ChakraProvider>
      <Container p={0} m={0}>
        <Home />
      </Container>
    </ChakraProvider>
  );
}

export default App;
