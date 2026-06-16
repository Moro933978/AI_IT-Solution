import React, { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import LandingPage from "./pages/home"
import Navbar from "./components/navbar"
import GlobalBackground from "./components/background"
import AboutSection from "./pages/About"
import ServicesSections from "./pages/Services"
import WhyUsSection from "./pages/whyus"
import ContactSection from "./components/commmenter"

function App() {

  useEffect(() => {
    AOS.init({
      once: false,
      duration: 700,
      ease: 'ease-out',
    });
  }, []);

  return (
    <>
      <GlobalBackground />
      <LandingPage />
      <Navbar />
      <AboutSection />
      <ServicesSections />
      <WhyUsSection />
      <ContactSection />
    </>
  )
}

export default App
