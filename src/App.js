import './App.css';
import Navbar from './components/Navbar/Navbar';
import GlobalStyle from './components/GlobalStyle/GlobalStyle'
import { BrowserRouter as Router, Routes, Route }  from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import Product from './pages/Product';
import SignUp from './pages/SignUp';

function App() {
  return (
    <GlobalStyle>
      <Router>
         <div className="App">
              <Navbar></Navbar>
              <Routes>
                  <Route path='/' element={<Home />}></Route>
                  <Route path='/services' element={<Services />}></Route>
                  <Route path='/products' element={<Product />}></Route>
                  <Route path='/sign-up' element={<SignUp />}></Route>
              </Routes> 
          </div>
      </Router>
    </GlobalStyle>
  );
}

export default App;
