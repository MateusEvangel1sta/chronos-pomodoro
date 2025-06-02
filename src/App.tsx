import { Container } from './components/Container';
import { Menu } from './components/Menu';
import { Logo } from './components/Logo';
import { CountDown } from './components/CountDown';
import { DefaultInput } from './components/DefaultInput';

import './styles/theme.css';
import './styles/global.css';

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
              labelText='task'
              id='myInput'
              type='text'
              placeholder='Digite algo'
            />
          </div>

          <div className='formRow'>
            <p>Lorem ipsum dolor sit aaaamet.aaa</p>
          </div>

          <div className='formRow'>
            <p>Ciclos</p>
            <p>0 0 0 0 0 0</p>
          </div>

          <div className='formRow'>
            <button>Enviar</button>
          </div>
        </form>
      </Container>
    </>
  );
}
