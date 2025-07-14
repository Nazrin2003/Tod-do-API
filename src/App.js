import logo from './logo.svg';
import './App.css';
import View from './components/View';
import Add from './components/Add';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Add/>}/>
        <Route path="/view" element={<View/>}/>

      </Routes>
      </BrowserRouter>
    </div>
    </div>
  );
}

export default App;
