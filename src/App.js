import { Contact } from './components/Contact';
import { Education } from './components/Education';
import { Experience } from './components/Experience';
import { Profile } from './components/Profile';
import { Projects } from './components/Projects';
import { Techs } from './components/Techs';


function App() {
  return (
    <div className='sm:flex'>

      <aside>
        <Profile/>
        <Contact/>
        <Techs/>
        <Experience/>
        <Education/>
      </aside>

      <section className='sm:w-[82%] w-[22rem]'>
        <Projects/>
      </section>

    </div>
      
    
  );
}

export default App;
