# Francisco Vu — Portfolio

Personal portfolio website built with React, TypeScript, JS, CSS and Vite. Features a Node.js/Express backend with Nodemailer for contact form submissions. 
Deployed live at (https://franciscovu.up.railway.app)!

## Tech Stack

**Frontend**
- React 19 + TypeScript
- Vite
- React Router DOM
- CSS (custom properties, no framework)

**Backend**
- Node.js + Express
- Resend HTTPS API (production) or Nodemailer + Gmail SMTP (fallback)

## Project Structure

```
portfolio/
├── src/
│   ├── pages/          # Landing, About, Projects, Blog, Contact
│   ├── components/     # Navbar, Footer, Project, Post
│   └── styles/
│       └── styles.css
├── backend/
│   └── emailer.js      # Express server + contact API
└── public/
    └── assets/
```

## Getting Started

### Prerequisites
- Node.js
- A [Resend](https://resend.com) API key (production), or a Gmail account with an [App Password](https://myaccount.google.com/apppasswords) for local SMTP

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
EMAIL_TO=you@gmail.com          # where messages are delivered
RESEND_API_KEY=re_...           # if set, Resend is used
EMAIL_USER=you@gmail.com        # Gmail SMTP fallback
EMAIL_PASS=your_gmail_app_password
PORT=3001
```

> Railway blocks outbound SMTP on Free/Trial/Hobby plans, so set `RESEND_API_KEY` in production.

### Development

Run the frontend and backend in separate terminals:

```bash
# Terminal 1 — frontend (http://localhost:5173)
npm run dev

# Terminal 2 — backend (http://localhost:3001)
node backend/emailer.js
```

### Production

```bash
npm run build
NODE_ENV=production node backend/emailer.js
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
