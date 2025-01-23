import './App.css';
import { Routes, Route} from "react-router-dom"
import HomePage from "./pages/homepage"
import BloggPage from './pages/bloggpage';
import Navbarheader from './components/navbarheader';

function App() {
  return (
  
    <>
    <Navbarheader/>
    <Routes>
      
        <Route path="/" element={<HomePage/>} />
        <Route path='/BloggPage' element={<BloggPage/>}/>

</Routes>
    
    </>
  );
}

export default App;
