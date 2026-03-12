import { Routes, Route } from 'react-router-dom'
import Landing from './pages/landing'
import About from './pages/about'
import Projects from './pages/projects'
import Blog from './pages/blog'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/blog" element={<Blog />} />
    </Routes>
  )
}