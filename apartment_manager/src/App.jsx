import { Route, Routes } from 'react-router';
import './App.css';
import { Flat } from './components/Flat/Flat';
import { Home } from './components/Home/Home';
import { Navbar } from './components/Navbar/Navbar';
import { Signin } from './components/Signin/Signin';

function App() {
  return (
    <div className="App">
     <Navbar />
     <Routes>
       <Route path='/' element={<Home />} />
       <Route path='/signin' element={<Signin />} />
       <Route path='/flat' element={<Flat />} />
     </Routes>
    </div>
  );
}

export default App;
