import './App.css'
import AboutSection from './Components/AboutSection'
import ContactSection from './Components/ContactSection'
import Experience from './Components/ExperienceSection'
import FooterSection from './Components/FooterSection'
import HeroSection from './Components/HeroSection'
import ProjectSection from './Components/ProjectSection'
import SkillsSection from './Components/SkillsSection'

function App() {

  return (
    <div className='container mx-auto'>
      <HeroSection></HeroSection>
      <div className='lg:mx-47 mx-10'>
        <AboutSection></AboutSection>
        <ProjectSection></ProjectSection>
        <SkillsSection></SkillsSection>
        <Experience></Experience>
        <ContactSection></ContactSection>
        <FooterSection></FooterSection>
      </div>
    </div>
  )
}

export default App
