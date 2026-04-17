import { Link } from 'react-router-dom';
import Navbar from '../components/navbar'
import Footer from '../components/footer'

export default function Landing() {

  return (
    <>
      <Navbar />

      <main>

        <div className="hero-text-container">
          <p>Hello! My name is Francisco Vu and I am YOUR Software Engineer</p>
        </div>

        <div className="hero-subtext-container">
          <p>Explore this page to learn more about me</p>
        </div>

      </main>

      <Footer />
    </>
  );
}
