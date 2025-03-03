import './App.css';
import Logo from './componentes/Logo';
import ListaDeTareas from './componentes/ListaDeTareas';

function App() {
  return (
    <div className='applicacion-tareas'>
      <Logo />
      <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
