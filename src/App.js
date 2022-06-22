import { Container } from '@chakra-ui/react';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';

export default function App() {
  return (
    <Container maxWidth="full" m={0} p={0}>
      <Home />
      <About />
      <Projects />
    </Container>
  );
}
