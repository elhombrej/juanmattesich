import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage  from "./Components/LandingPage";
import  PageNotFound  from './Components/PageNotFound';
import Home from './Components/Home';
import Carta from "./Components/Carta.jsx";

function App() {


    return (
    <BrowserRouter>

      <Routes>

        <Route path='/' element={<LandingPage />} />

        <Route path='/home' element={<Home />} />

        <Route path='/carta/:id' element={<Carta />} />

        <Route path='*' element={<PageNotFound />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;
