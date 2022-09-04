import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';
import Detail from './components/Detail';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login'
function App() {
  return (

    <BrowserRouter>
    <Header/>
      <Routes>
        <Route exact path='/' element={<Login/>} />
        <Route exact path='/Home' element={<Home/>} />
        <Route exact path='/detail/:id' element={<Detail/>} />
      
      </Routes>
    </BrowserRouter>
   
  );
}

export default App;
