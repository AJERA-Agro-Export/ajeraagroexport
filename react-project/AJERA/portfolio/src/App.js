import './App.css';
import Slide from './components/slide-1/slide.jsx';
import Header from './components/header/Header.jsx';
import Skill from './components/Skill/Skill.jsx';
import Pro_content from './components/project-container/Pro-content.jsx';
import Experience from './components/Experience/Experience.jsx'
import Contact from './components/contact/Contact.jsx';
import Profile from './components/Profile/Profile.jsx';
import Home from './components/Home/Home.jsx';
import "bootstrap/dist/css/bootstrap.min.css";
// import Logo from './components/Logo/Logo.jsx';
import ContactForm from "./components/ContactUsPage/ContactUsPage.jsx";

function App() {
  return (
  <div>
  <Header />
  {/* <Logo/> */}
  <Home/>
  <Slide/> 
  <Skill/>
  <Pro_content/>
  <Experience/>
 
  <ContactForm />
  <Contact/>
  <Profile/>
 
  {/* <div className='aji'>hi</div> */}
  </div>

  );
}

export default App;
