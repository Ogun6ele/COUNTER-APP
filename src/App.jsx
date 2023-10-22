import CounterPage from './CounterPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home'
import ErrorPage from './Error/ErrorPage';
import ErrorTest from './Error/ErrorTest';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="counterpage" element={<CounterPage/>} />
        <Route path="/errorpage" element={<ErrorPage/>} />
        <Route path="/errortest" element={<ErrorTest/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
