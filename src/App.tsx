import { PlayCircleIcon } from 'lucide-react';
import { Container } from './components/container';
import { CountDown } from './components/countDown';
import { Cycles } from './components/cycles';
import { DefaultButton } from './components/defaultButton';
import { DefaultInput } from './components/defaultInput';
import { Logo } from './components/logo';
import { Menu } from './components/menu';
import './styles/global.css';
import './styles/theme.css';

export function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>
      <Container>
        <Menu />
      </Container>
      <Container>
        <CountDown />
      </Container>
      <Container>
        <form className='form' action=''>
          <div className='formRow'>
            <DefaultInput
              label='task'
              id='meuInput'
              type='text'
              placeholder='Digite algo'
            />
          </div>
          <div className='formRow'>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className='formRow'>
            <Cycles />
          </div>
          <div className='formRow'>
            <DefaultButton icon={<PlayCircleIcon />}>Enviar</DefaultButton>
          </div>
        </form>
      </Container>
    </>
  );
}
