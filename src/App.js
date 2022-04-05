import{
  HashRouter,
  Routes,
  Route
} from 'react-router-dom'
import './App.css';
import Login from './Components/Login';
import Pokedex from './Components/Pokedex';
import PokedexData from './Components/PokedexData';
// import PokedexInfo from './Components/PokedexInfo';
import ProtectedRoutes from './Components/ProtectedRoutes';
import {useSelector} from 'react-redux'



function App() {


  const isDark = useSelector(state => state.isDark)


  const style ={
      background: isDark? ("black"):("whitesmoke")
  }

  // console.log(isDark)
  return (

    <HashRouter>
    <div className="App" style={style}>

      <Routes>
        <Route path='/' element={<Login/>}/>

        <Route element={<ProtectedRoutes/>}>
          <Route path='/Pokedex' element={<Pokedex/>}/>
          <Route path='/Pokedex/:Name' element={<PokedexData/>}/>
        </Route>

      </Routes>

    </div>
    </HashRouter>
  );
}

export default App;
