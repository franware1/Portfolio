import { Link } from 'react-router-dom';
import Navbar from '../components/navbar'
import Footer from '../components/footer'

export default function About() {
    return (
        <div>
            <Navbar />

            <main>
                <div className='about-split-container'>
                    <div className='about-left-container'>
                        <div className='about-left'>
                            <img src='/public/assets/images/senior-photo.jpg'></img>
                        </div>
                    </div>

                    <div className='about-right-container'>
                        <div className='about-right'>
                            <p>
                                My name is Francisco Vu. I hail from Boston, Massachusetts and 
                                received my Bachelor's of Science degree in Computer Science from 
                                the University of Massachusetts-Boston. 
                            </p>
                        </div>
                    </div>
                </div>               
            </main>

            <Footer />
        </div>
    );
}