# FreeRoom 🟢  
**Interactive Meeting Room Booking App**

FreeRoom is a lightweight web + API application for managing and booking meeting rooms in real time.  
It displays live room availability on a floor plan, syncs with resource calendars, and allows ad-hoc 30-minute bookings via kiosk or web.  

---

## 🚀 Features (MVP)
- View room availability in real time (Free / Busy / Next available)
- Tap-to-book ad-hoc 30-minute slots
- Two-way sync with Google/Microsoft resource calendars (starting with Google)
- Upload floor plans (PDF/SVG) and map polygons to meeting room resources
- Admin panel to configure buffers, anonymise titles, and override bookings

---

## 🛠️ Tech Stack
**Backend**: FastAPI, SQLAlchemy, PostgreSQL, Uvicorn  
**Frontend**: React, TypeScript, Vite, TailwindCSS  
**Auth**: OAuth2 / SSO (via Auth0/Google/Entra ID planned)  
**Infra**: Docker (future), Celery for background jobs (planned)

---

## 📂 Project Structure
meetingroom-3d/ (root)
│
├── api/ # FastAPI backend
│ └── app/
│ ├── main.py # API entrypoint
│ └── init.py
│
└── web/ # React + Vite frontend
├── src/
│ └── App.tsx # Kiosk UI
└── vite.config.ts


# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```


Acknowledgements

Inspired by enterprise workplace tools and built as a portfolio project by request of **Digital Culture Group**,  
demonstrating backend + frontend + API integration skills.