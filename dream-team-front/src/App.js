import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./components/screens/home/Home"
import "./App.css"
import Footer from "./components/footer/Footer";
import Auth from "./components/screens/auth/Auth";
import {ChakraProvider} from "@chakra-ui/react"
import ResumeBuilder from "./components/resume/ResumeBuilder";
import AboutUs from "./components/screens/about/AboutUs";



const App = () => {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <div className="app">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/*" element={<Auth />} />
            <Route path="/resume" element={<ResumeBuilder />} />
            <Route path="/about" element={<AboutUs />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
