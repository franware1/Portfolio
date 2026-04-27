# Francisco Vu — Portfolio

Personal portfolio website built with React, TypeScript, and Vite. Features a Node.js/Express backend with Nodemailer for contact form submissions.

## Tech Stack

**Frontend**
- React 19 + TypeScript
- Vite
- React Router DOM
- CSS (custom properties, no framework)

**Backend**
- Node.js + Express
- Nodemailer (Gmail SMTP)

## Project Structure

```
portfolio/
├── src/
│   ├── pages/          # Landing, About, Projects, Blog, Contact
│   ├── components/     # Navbar, Footer, Project, Post
│   └── styles/
│       └── styles.css
├── backend/
│   └── index.js        # Express server + contact API
└── public/
    └── assets/
```

## Getting Started

### Prerequisites
- Node.js
- A Gmail account with an [App Password](https://myaccount.google.com/apppasswords) configured

### Installation

1. Clone the repository
```bash
git clone https://github.com/franware1/Portfolio.git
cd Portfolio
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables — copy `.env.example` to `.env` and fill in your values
```bash
cp .env.example .env
```

```
EMAIL_USER=you@gmail.com
EMAIL_PASS=your_gmail_app_password
EMAIL_TO=you@gmail.com
PORT=3001
```

### Development

Run the frontend and backend in separate terminals:

```bash
# Terminal 1 — frontend (http://localhost:5173)
npm run dev

# Terminal 2 — backend (http://localhost:3001)
node backend/index.js
```

### Production

```bash
npm run build
NODE_ENV=production node backend/index.js
```

In production, Express serves the built frontend from `dist/` and handles the `/api/contact` endpoint — only one process needed.

## Pages

| Route | Description |
|---|---|
| `/` | Landing |
| `/about` | About me |
| `/projects` | Project showcase |
| `/blog` | Blog posts |
| `/contact` | Contact form |
