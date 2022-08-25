import './App.css'
import Hero from './components/Hero/Hero' 
import Navbar from './components/Navbar/Navbar'
import Intro from './components/Intro/Intro'
import Service from './components/Service/Service'
import Achievement from './components/Achievement/Achievement'
import Team from './components/Team/Team';
import Banner from './components/Banner/Banner';
import Testimonial from './components/Testimonial/Testimonial';
import Appointment from './components/Appointment/Appointment';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className="App">
       <Navbar/>
           <Hero/>
              <Intro/>
                   <Service/>
                      <Achievement/>
                            <Team/>
                            <Banner/>
                          <Testimonial/>
                          <Appointment/>
                            <Footer/>
    </div>
  );
}

export default App;
