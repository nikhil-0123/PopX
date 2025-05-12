import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Hero from './pages/Hero'
import Register from './pages/Register';
import Home from './pages/Home';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex justify-center items-center bg-gray-100">
        <div className="w-[375px] bg-white shadow-xl rounded-xl">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path='/login' element={<Login/>} />
            <Route path="/register" element={<Register />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
