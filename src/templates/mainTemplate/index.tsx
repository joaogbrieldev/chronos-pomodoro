import { Container } from '../../components/container';
import { Footer } from '../../components/footer';
import { Logo } from '../../components/logo';
import { Menu } from '../../components/menu';

export function MainTemplate({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Container>
        <Logo />
      </Container>
      <Container>
        <Menu />
      </Container>
      {children}
      <Container>
        <Footer />
      </Container>
    </>
  );
}
