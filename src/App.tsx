import { Container } from './components/container';
import { Heading } from './components/heading';
import { Logo } from './components/logo';
import './styles/global.css';
import './styles/theme.css';

export function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>
      <Container>
        <Heading>MENU</Heading>
      </Container>
    </>
  );
}
