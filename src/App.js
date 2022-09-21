import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import About from './pages/About';
import Header from './components/Header';
import './App.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Header />}>
            <Route index element={<Home/>}/>
            <Route path='/ProductDetail' element={<ProductDetail/>}>
                <Route path=':id' element={<ProductDetail/>}/>            
            </Route>
            <Route path='/About' element={<About/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;