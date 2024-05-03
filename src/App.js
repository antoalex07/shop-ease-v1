import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Authwrapper from './auth/Authwrapper';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Authwrapper/>
      </BrowserRouter>
    </div>
  );
}

export default App;
