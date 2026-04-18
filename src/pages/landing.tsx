import { Link } from 'react-router-dom';
import Navbar from '../components/navbar'
import Footer from '../components/footer'

export default function Landing() {

  return (
    <>
      <Navbar />

      <main>

        <div className='landing-split-container'>
          <div className='landing-left-container'>
            <div className="landing-left">
              <p>Hello, My name is Francisco Vu.</p>
              <p><em>YOUR NEXT </em>Software Engineer</p>
                <div className="landing-left-subtext">
                  <p></p>
                </div>
            </div>
          </div>

          <div className='landing-right-container'>
            <div className='landing-right'>
              <img src="/public/assets/images/senior-photo.jpg" alt="photo of francisco" />

            </div>
          </div> 
        </div>

      </main>

    </>
  );
}
