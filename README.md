# Triton Engineering Student Council (TESC) — Main Site

Official website for the Triton Engineering Student Council at UC San Diego.

Live site: https://tescatucsd.org/  
Built with: React + Vite, Tailwind CSS, react-router-dom

---

## Getting Started

### Prerequisites
- Node.js (LTS recommended)
- npm (or pnpm/yarn)

### Install
npm install

### Run locally
npm run dev

Open the URL printed in your terminal (usually http://localhost:5173).

---

## Scripts

npm run dev       # start Vite dev server  
npm run build     # build production bundle to /dist  
npm run preview   # preview production build locally  
npm run lint      # if ESLint is configured  

---

## Tech Stack
- React (UI)
- Vite (build tool / dev server)
- Tailwind CSS (styling)
- react-router-dom (client-side routing)

---

## Project Structure (Typical)

Your exact structure may vary; this is the recommended organization:

.
├── public/                 # static files served as-is  
├── src/  
│   ├── assets/             # images/icons imported in code  
│   ├── components/         # reusable UI components  
│   ├── layouts/            # shared layouts (header/footer wrappers)  
│   ├── pages/              # route-level pages  
│   ├── routes/             # router config (optional)  
│   ├── App.tsx             # app root  
│   └── main.tsx            # entry point (mount + router)  
├── index.html  
├── tailwind.config.*       # Tailwind configuration  
├── postcss.config.*        # PostCSS configuration  
├── vite.config.*           # Vite configuration  
└── package.json  

---

## Routing (react-router-dom)

This site uses react-router-dom for SPA navigation. Route-level pages typically live in src/pages, and shared wrappers can live in src/layouts.

Example (illustrative):

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import Events from "./pages/Events";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/events", element: <Events /> },
    ],
  },
  { path: "*", element: <NotFound /> },
]);

export default function App() {
  return <RouterProvider router={router} />;
}

### SPA Refresh / Deep Link Support
If you host this as a static SPA, configure your host to rewrite all routes to index.html so refreshing on /events (or any nested route) doesn’t 404.

---

## Styling (Tailwind)

Tailwind is used throughout the codebase.

Typical setup:
- Tailwind directives live in your global stylesheet (commonly src/index.css):
  - @tailwind base;
  - @tailwind components;
  - @tailwind utilities;

Recommended conventions:
- Prefer utility-first styling in components
- Extract repeated UI into src/components
- Keep page-level layout decisions in src/pages / src/layouts

---

## Environment Variables (Vite)

If the project needs deploy-time configuration, use a local .env file.

Vite only exposes env vars prefixed with VITE_.

Example:
VITE_PUBLIC_SITE_URL=https://tescatucsd.org

Do not commit secrets. Use .env.example to document required keys/vars.

---

## Build & Deploy

### Production build
npm run build

Vite outputs the production build to dist/.

### Preview the build locally
npm run preview

Hosting notes:
- Serve the dist/ directory
- Enable SPA rewrites (all routes → index.html) when using BrowserRouter / createBrowserRouter

---

## Contributing

1. Create a branch from main
2. Make changes with clear commits
3. Run locally and verify routing + UI
4. Open a PR (include screenshots for UI changes)

Suggested guidelines:
- Keep components small and reusable
- Avoid duplicated layout logic across pages
- Keep naming consistent (PascalCase for components, etc.)

---

## Troubleshooting

### 404 when refreshing a route like /events
Your host likely isn’t rewriting requests to index.html. Add an SPA rewrite rule.

### Tailwind styles not applying
Check tailwind.config.* includes:
- ./index.html
- ./src/**/*.{js,ts,jsx,tsx}

### Works in dev, fails in build
Run npm run preview to reproduce locally and check:
- broken imports (case sensitivity)
- missing assets
- incorrect base path / deploy config

---

## License

Add a license file here if/when TESC decides one (e.g., MIT).
