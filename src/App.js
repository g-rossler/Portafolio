import { Container } from '@chakra-ui/react';
import Home from './components/Home';
import About from './components/About';
import Proyects from './components/Proyects';

export default function App() {
  return (
    <Container maxWidth="full" h="100vh" m={0} p={0}>
      <Home />
      <About />
      <Proyects />
    </Container>
  );
}
