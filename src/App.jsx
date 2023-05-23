import Navbar from './Navbar'
import About from './pages/About'
import Blog from './pages/Blog'
import Projects from './pages/Projects'
import Illustration from './pages/Illustration'
import GitHub from './pages/GitHub'

import './App.css'

export default function App() {
  let component 
  switch (window.location.pathname) {
      case '/about':
        component = <About />
      break;
      case '/blog':
        component = <Blog />
          break;
      case '/projects':
        component = <Projects />
      
      break;
      case '/illustration':
        component = <Illustration />
      
      break;
      case '/github':
        component = <GitHub />
      
      break;
  
  
    default:
      break;
  }
  return (
    <>
      <Navbar />
      {component}
      </>
  )
  
}

