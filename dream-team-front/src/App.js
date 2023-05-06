import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./components/screens/home/Home"
import "./App.css"
import Footer from "./components/footer/Footer";
import Auth from "./components/screens/auth/Auth";



const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/auth/*" element={<Auth/>}/>
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
