import './App.css';
import Basicinfo from './components/Basicinfo';
import Complete from './components/Complete';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Main from './components/Main';
import {Routes,Route} from "react-router-dom"
import Review from './components/Review';
import Login from './components/Login';
import Already_resume from './components/Already_resume';
import Else_resume from './components/Else_resume';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <Main/>}></Route>
        <Route path='/login' element={ <Login/>}></Route>
        <Route path="basic" element={  <Basicinfo/>}></Route>
        <Route path='contact' element={<Contact/>}></Route>
        <Route path='experience' element={ <Experience/>}></Route>
        <Route path="complete" element={<Complete/>}></Route>
        <Route path="review" element={<Review/>}></Route>
        <Route path="already" element={<Already_resume/>}></Route>
        <Route path="already" element={<Already_resume/>}></Route>
     </Routes>
     {/* <Review/>   */}
{/* <Else_resume/>      */}
    
     
    </div>
  );
}

export default App;
