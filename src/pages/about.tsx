import Navbar from '../components/navbar'
import Footer from '../components/footer'

const badges = [
    { name: 'C++',              url: 'https://img.shields.io/badge/C++-00599C?style=for-the-badge&logo=c%2B%2B&logoColor=white' },
    { name: 'CSS3',             url: 'https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white' },
    { name: 'HTML5',            url: 'https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white' },
    { name: 'Java',             url: 'https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white' },
    { name: 'JavaScript',       url: 'https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black' },
    { name: 'Python',           url: 'https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white' },
    { name: 'TypeScript',       url: 'https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white' },
    { name: 'Oracle',           url: 'https://img.shields.io/badge/Oracle-F80000?style=for-the-badge&logo=oracle&logoColor=white' },
    { name: 'Bootstrap',        url: 'https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white' },
    { name: 'Express.js',       url: 'https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express&logoColor=white' },
    { name: 'JWT',              url: 'https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=json-web-tokens&logoColor=white' },
    { name: 'NPM',              url: 'https://img.shields.io/badge/NPM-CB3837?style=for-the-badge&logo=npm&logoColor=white' },
    { name: 'Node.js',          url: 'https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white' },
    { name: 'Nodemon',          url: 'https://img.shields.io/badge/Nodemon-76D04B?style=for-the-badge&logo=nodemon&logoColor=white' },
    { name: 'React',            url: 'https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB' },
    { name: 'React Native',     url: 'https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB' },
    { name: 'React Router',     url: 'https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white' },
    { name: 'React Hook Form',  url: 'https://img.shields.io/badge/React_Hook_Form-EC5990?style=for-the-badge&logo=reacthookform&logoColor=white' },
    { name: 'TailwindCSS',      url: 'https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white' },
    { name: 'Vite',             url: 'https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white' },
    { name: 'Vue.js',           url: 'https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vue.js&logoColor=4FC08D' },
    { name: 'MongoDB',          url: 'https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white' },
    { name: 'MySQL',            url: 'https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white' },
    { name: 'Git',              url: 'https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white' },
    { name: 'GitHub',           url: 'https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white' },
    { name: 'GitLab',           url: 'https://img.shields.io/badge/GitLab-FC6D26?style=for-the-badge&logo=gitlab&logoColor=white' },
    { name: 'Power BI',         url: 'https://img.shields.io/badge/Power_BI-F2C811?style=for-the-badge&logo=power-bi&logoColor=black' },
    { name: 'Docker',           url: 'https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white' },
];

export default function About() {
    return (
        <div>
            <Navbar />
            <main className="about-main">

                <section className="about-hero">
                    <div className="about-photo-wrap">
                        <img src="/public/assets/images/senior-photo.jpg" alt="Francisco Vu" />
                    </div>
                    <div className="about-intro">
                        <h1>Hi! My name is Francisco Vu and here's a little bit about me...</h1>
                        <p>
                            I am a student at UMass Boston and will be graduating this coming May.
                            I love open source and am always trying to learn something new every day
                            about emerging, cutting edge technology. The tech world is always fast on
                            the move and it is my duty as an engineer to stay up to date! Check out the 
                            projects tab on this website to learn more about what I have worked on in 
                            the past!
                        </p>
                    </div>
                </section>

                <section className="about-working">
                    <h2>What I'm working on right now!</h2>
                    <ul className="about-working-list">
                        <li>
                            <strong>Open to work!</strong> — Having just graduated from UMass Boston, I am committed to be <em>your </em>  
                            engineer.
                        </li>
                        <li>
                            <strong>Kashimo</strong> — Improving this agent to optimize and ensure stability in the electric grid automatically. 
                                With increasing power demands from the growing AI industry using hungry data centers, 
                                the electric grid is going to undertake a lot more load in these coming years. 
                                What better idea is there than to allieviate this issue with AI itself?
                        </li>
                        <li>
                            <strong>LocalVision</strong> — Building a privacy-first home security camera system that keeps video processing and storage entirely on-device, 
                            no cloud required. It is designed to give users full control over their home.
                        </li>
                    </ul>
                </section>

                <section className="about-tech">

                    <h2>Frameworks & Languages I have worked with</h2>

                    <div className="about-badges">
                        {badges.map(b => (
                            <img key={b.name} src={b.url} alt={b.name} />
                        ))}
                    </div>

                </section>

            </main>
            <Footer />
        </div>
    );
}
