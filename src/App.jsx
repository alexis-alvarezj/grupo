
import './App.css';
import {BrowserRouter  , Routes, Route , } from 'react-router-dom';
import Navbar from './Components/Navegacion/Navbar';
import Inicio from './Components/Navegacion/Inicio';
import Mensajes from './Components/Navegacion/Messages';
import Perfil from './Components/Navegacion/Perfil';
import Footer from './Components/Footer/Footer';




const App = () => {
  return (
    <div className="App bg-info">
      <BrowserRouter>
      <Navbar/>
        <Routes>
        
      <Route path='/' element={<Inicio/>}/>
      <Route path='/Messages' element={<Messages/>}/>
        <Route path='/Perfil'element={<Perfil/>}/>
      </Routes>
      </BrowserRouter>
      
<Footer/>
    </div>

    



  )
}
 

export default App;
