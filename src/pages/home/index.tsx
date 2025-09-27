import { Container } from '../../components/container';
import { CountDown } from '../../components/countDown';
import { MainForm } from '../../components/mainForm';
import { MainTemplate } from '../../templates/mainTemplate';

export function Home() {
  return (
    <MainTemplate>
      <Container>
        <CountDown />
      </Container>
      <Container>
        <MainForm />
      </Container>
    </MainTemplate>
  );
}
