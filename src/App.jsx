import React from 'react'
import Hero from './Hero'
import Projects from './pages/Project'
import Contact from './pages/Contact'
import Achievement from './pages/Achievement'
import ScrollSkils from './pages/Animation/ScrollSkils'
import ProjectCrad from './pages/ProjectCrad'
import MySkils from './components/MySkils'
import About from './components/About'
import { Model3d } from './pages/Model3d'
import EducationSection from './pages/Animation/EducationSection'

const App = () => {
  return (
    <div className='w-full overflow-x-hidden'>
      <Hero/>
      <About/>
      <ScrollSkils/>
      <Projects/>
      <ProjectCrad/>
      <MySkils/>
      <Model3d />
      <Achievement/>
      <EducationSection/>
      <Contact/>
   </div>
  )
}

export default App
