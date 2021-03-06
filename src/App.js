import logo from './logo.svg';
import './App.css';
import Navber from './components/Navber/Navber';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Review from './components/Review/Review';
import Dashboard from './components/Dashboard/Dashboard';
import Blogs from './components/Blogs/Blogs';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound'

function App() {
  return (
    <div>
     <Navber />
     <Routes>
       <Route path="/" element={<Home />}></Route>
       <Route path="/home" element={<Home />}></Route>
       <Route path="/review" element={<Review />}></Route>
       <Route path="/dashboard" element={<Dashboard />}></Route>
       <Route path="/blogs" element={<Blogs />}></Route>
       <Route path="/about" element={<About />}></Route>
       <Route path="*" element={<NotFound />}></Route>
     </Routes>
    </div>
  );
}

export default App;
