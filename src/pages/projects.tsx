import { Link } from 'react-router-dom';
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Project from '../components/project'

export default function Projects() {
    return (
        <>
            <Navbar />
            <main>
                <div className="projects-list">
                    <Project
                        title="Kashimo"
                        description="A grid-aware advisory agent that provides real-time decision 
                            support for electric grid optimization, helping operators reason through 
                            stability, dispatch, and reliability challenges."
                        tags={["Python", "Infrastructure", "Grid Operation", "Agentic"]}
                        githubUrl="https://github.com/franware1/Kashimo"
                    />

                    <Project
                        title="LocalVision"
                        description="A low-cost, motion-triggered video monitoring system for the home. Built with 
                        an ESP32-CAM and a full-stack web application. Records clips on motion detection, 
                        sends real-time alerts, and supports privacy controls including arming/disarming, 
                        region masking, and local storage — no cloud required."
                        tags={["MERN Stack", "IoT", "Arduino", "CSS3"]}
                        githubUrl="https://github.com/franware1/Home-Security-Camera-System"
                    />

                    <Project
                        title="Portfolio"
                        description="A website dedicated to showcasing Francisco Vu, the software engineer.
                        Links to my GitHub, LinkedIn, project repos, and email are all provided here. 
                        I used Kubernetes to deploy this website."
                        tags={["React", "CSS3", "TypeScript", "Nodemailer", "Kubernetes"]}
                        githubUrl='https://github.com/franware1/Portfolio'
                    />
                </div>
            </main>
            <Footer />
        </>
    );
}