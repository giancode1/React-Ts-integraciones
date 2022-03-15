import { Counter } from './components/Counter';
import { Usuario } from './components/Usuario';
import { TimerPadre } from './components/TimerPadre';
import { ContadorRed } from './components/ContadorRed';

function App() {
  return (
    <>
      <h1>Hola mundo -Ts</h1>
      <hr />

      <h3>useState</h3>
      <Counter />
      <Usuario />

      <hr />
      <h3>useEffect - useRef</h3>
      <TimerPadre />

      <hr />
      <h3>useReducer</h3>
      <ContadorRed />
    </>
  );
}

export default App;
