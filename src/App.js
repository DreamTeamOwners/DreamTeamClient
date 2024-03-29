import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./components/screens/home/Home"
import "./App.css"
import Footer from "./components/footer/Footer";
import Auth from "./components/screens/auth/Auth";
import {ChakraProvider} from "@chakra-ui/react"
// import ResumeBuilder from "./components/resume/ResumeBuilder";
import AboutUs from "./components/screens/about/AboutUs";
import Profile from "./components/screens/profile/Profile";
import Team from "./components/screens/team/Team";
import CompanyList from "./components/screens/companies/CompanyList";
import VacancyList from "./components/screens/vacancies/VacancyList";
import Test from './Test';
import ResumeEdit from "./components/resume/updated_resume/ResumeEdit";



const App = () => {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <div className="app">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<ResumeEdit />} />
            <Route path="/auth/*" element={<Auth />} />
            {/* <Route path="/*" element={<Workspace/>}/> */}
            <Route path="/profile" element={<Profile/>}/>
            {/* <Route path="/resume" element={<ResumeBuilder />} /> */}
            <Route path="/team/*" element={<Team/>} />
            <Route path="/companies" element={<CompanyList />} />
            <Route path="/vacancies" element={<VacancyList />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/test" element={<Test />} />
            
          </Routes>
          {/* <ChatSupport/> */}
          <Footer />
        </div>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
