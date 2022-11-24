
import Hire from './Hire'
import Values from './Values'
import About from './About'
import Contact from './ContactForm'
// import Divider from '@'

export default function InformationPage (): JSX.Element {
  return (
        <div className="flex flex-col justify-center items-center w-[100vw] divide-y">
          <Hire />
          <Values />
          <About />
          <Contact />
        </div>
  )
}
