import { Routes, Route } from 'react-router-dom'
import Landing from './pages/landing'
import About from './pages/about'
import Projects from './pages/projects'
import Blog from './pages/blog'
import Contact from './pages/contact.tsx'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/landing" element={<Landing />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}