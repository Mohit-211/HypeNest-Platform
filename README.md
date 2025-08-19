Hypenest Media – Creator Marketplace

Hypenest Media is a modern creator marketplace that connects brands with influencers and creators for UGC campaigns, paid collaborations, and authentic partnerships.

Built with speed, scalability, and collaboration in mind.

🌐 Live Project

https://hypenestmedia.com

🚀 Features

Creator Discovery – Browse and filter vetted creators.

Brand Dashboard – Launch, manage, and track campaigns.

Creator Dashboard – Manage profile, collaborations, and earnings.

Secure Authentication – Brand/Creator sign-up & login flows.

Responsive Design – Optimized for web and mobile.

Fast Frontend – Built with Vite + React for lightning-fast performance.

🛠️ Tech Stack

Frontend: React (TypeScript), Vite, shadcn/ui, Tailwind CSS

Backend: (planned) Node.js / Express with MySQL

Deployment: Nginx on Ubuntu, Certbot SSL

Version Control: GitHub + CI/CD pipelines

Design System: shadcn-ui components + Tailwind

📦 Getting Started
Prerequisites

Node.js (use nvm)

npm or yarn

Installation

# Clone repository

git clone <YOUR_REPO_URL>

cd hypenest-frontend

# Install dependencies

npm install

# Run development server

npm run dev

The app will be available at http://localhost:5173.

Build for Production
npm run build

Build files are generated in /dist. Deploy with Nginx or any static hosting service.

🌍 Deployment

We use Ubuntu + Nginx for production.
Steps:

Build with npm run build.

Copy /dist to /var/www/hypenestplatform/hypenest-frontend/dist.

Point Nginx config to that directory.

Reload Nginx and ensure SSL via Certbot.

📖 Project Structure
hypenest-frontend/
├── public/ # Static assets (favicon, OG images, etc.)
├── src/ # React components, hooks, and logic
├── index.html # Entry point with SEO & branding
├── tailwind.config.js
└── package.json

👥 Contributing

Contributions are welcome! Please fork the repo and submit PRs for new features, bug fixes, or improvements.

📜 License

This project is licensed under the MIT License – feel free to use and adapt.

✨ About Hypenest Media

Hypenest Media is on a mission to make influencer marketing accessible, transparent, and results-driven.
We help brands grow faster by connecting them with the right creators.

🔥 Ready to grow your brand? Visit hypenestmedia.com.
