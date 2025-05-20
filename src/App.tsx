import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Signup from './pages/Signup';
import { Analytics } from '@vercel/analytics/react';
import './App.css';

function Home() {
  return (
    <div>
      <p className='text-5xl text-primary text-center'>Hello World</p>
      <p className='text-5xl text-secondary text-center'>Hello World</p>
      <p className='text-5xl text-navy text-center'>Hello World</p>
      <p className='text-5xl text-blue text-center'>Hello World</p>
      <p className='text-5xl text-darkgray text-center'>Hello World</p>
      <div className='flex justify-center mt-8'>
        <Link to="/signup">
          <button className="bg-blue text-primary px-6 py-2 rounded hover:bg-blue-700 transition">Go to Signup</button>
        </Link>
      </div>
      <Analytics />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
