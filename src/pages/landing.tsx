import { useState, useEffect } from 'react';
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import useRoleScroll from '../hooks/roleScroll';

export default function Landing() {
  const { role, visible }= useRoleScroll();

  return (
    <>
      <Navbar />

      <main>

        <div className='landing-split-container'>
          <div className='landing-left-container'>
            <div className="landing-left">
              <p>Hello! My name is Francisco Vu</p>
              <p><em>YOUR NEXT </em></p>

              <div className={`landing-role ${visible ? 'landing-role--visible' : ''}`}>
                <p>{role}</p>
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
