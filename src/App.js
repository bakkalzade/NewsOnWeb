
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Post from './components/post';
import OnePost from './components/OnePost';

function App() {

  return (
    <BrowserRouter>
      <div className="App">

        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/news" element={<Post />}></Route>  
          <Route path="/news/:newsId" element={<OnePost />}></Route>          
        </Routes>
      </ div>

    </BrowserRouter>
  );
}


export default App;
