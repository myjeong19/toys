import './App.css';
import { Main } from './components/main/Main';
import { DateBox } from './components/side-nav/DateBox';
import { Form } from './components/side-nav/Form';

function App() {
  return (
    <div className='app'>
      <Main />
      <DateBox />
      <Form />
    </div>
  );
}

export default App;
