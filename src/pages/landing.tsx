import { Link } from 'react-router-dom';

export default function Landing() {
  return (
    <div className="min-h-screen bg-bg text-text flex flex-col">

      {/* Navbar */}
      <nav className="flex items-center" style={{ padding: '1.5vh 8vw' }}>
        <ul className="flex gap-[3vw] list-none">
          {[
            { label: 'About', to: '/about' },
            { label: 'Projects', to: '/projects' },
            { label: 'Blog', to: '/blog' },
          ].map(({ label, to }) => (
            <li key={to}>
              <Link
                to={to}
                className="uppercase tracking-widest text-text hover:text-accent transition-colors duration-200"
                style={{ fontFamily: 'var(--font-display)', fontSize: '1.1vw' }}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Hero */}
      <main className="flex-1 flex flex-col justify-center" style={{ padding: '6vh 8vw' }}>
        <p
          className="text-accent uppercase tracking-widest mb-[2vh]"
          style={{ fontFamily: 'var(--font-display)', fontSize: '1.2vw' }}
        >
          Hello, I&apos;m
        </p>
        <h1
          className="uppercase leading-none mb-[4vh]"
          style={{ fontFamily: 'var(--font-display)', fontSize: '10vw' }}
        >
          Francisco
          <br />
          Vu.
        </h1>
        <p
          className="leading-relaxed mb-[5vh]"
          style={{ fontFamily: 'var(--font-body)', fontSize: '1.4vw', maxWidth: '40vw' }}
        >
          A developer and designer who builds thoughtful digital experiences.
          Interested in the intersection of design, technology, and storytelling.
        </p>
        <div className="flex gap-[2vw]">
          <Link
            to="/projects"
            className="bg-text text-bg uppercase tracking-widest hover:bg-accent transition-colors duration-200"
            style={{ fontFamily: 'var(--font-display)', fontSize: '1vw', padding: '1vh 2.5vw' }}
          >
            View Work
          </Link>
          <Link
            to="/about"
            className="border-2 border-text text-text uppercase tracking-widest hover:border-accent hover:text-accent transition-colors duration-200"
            style={{ fontFamily: 'var(--font-display)', fontSize: '1vw', padding: '1vh 2.5vw' }}
          >
            About Me
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer style={{ padding: '2vh 8vw' }}>
        <p
          className="uppercase tracking-widest opacity-50"
          style={{ fontFamily: 'var(--font-display)', fontSize: '0.9vw' }}
        >
          &copy; {new Date().getFullYear()} Francisco Vu
        </p>
      </footer>

    </div>
  );
}
