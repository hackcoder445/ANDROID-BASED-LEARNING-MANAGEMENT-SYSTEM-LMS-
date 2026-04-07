# Android-Based Learning Management System (LMS)

A mobile-first Learning Management System built with React Native (Expo) and TypeScript, backed by a Node.js/Express API.

## Overview

This project delivers an Android-ready LMS experience with:
- Authentication flows (login, registration, password reset, magic-link verification)
- Course discovery and course detail experience
- Video lesson screens
- Live class and live room screens
- Quiz and assessment flow
- Certificate viewing
- Chat and notifications
- Instructor and learner-focused dashboards

## Tech Stack

### Mobile App (`/`)
- Expo SDK 51
- React Native + TypeScript
- React Navigation (stack + tabs)
- Zustand (state management)
- TanStack Query (data fetching)
- Axios

### Backend API (`/backend`)
- Node.js + Express
- TypeScript
- JWT authentication support
- PostgreSQL + Redis ready configuration

## Project Structure

```text
.
|-- src/                  # React Native app source
|   |-- components/       # Shared UI components
|   |-- screens/          # App screens
|   |-- navigation/       # Navigation stacks/tabs
|   |-- services/         # API and integration services
|   |-- hooks/            # Reusable hooks
|   |-- state/            # Zustand stores
|   `-- constants/        # Theme, config, mock data
|-- backend/              # Express API
|   `-- src/
|       |-- controllers/  # Route handlers
|       |-- routes/       # API routes
|       |-- middleware/   # Auth middleware
|       `-- config/       # Environment config
|-- App.tsx
`-- package.json
```

## Prerequisites

- Node.js 18+
- npm 9+
- Expo CLI (optional, via `npx expo`)
- Android Studio / Android emulator (for Android testing)

## Environment Variables

Create a `.env` file at the project root (mobile app) using `.env.example`:

```env
EXPO_PUBLIC_AGORA_APP_ID=
EXPO_PUBLIC_STREAM_API_KEY=
EXPO_PUBLIC_STRIPE_PUBLISHABLE_KEY=
EXPO_PUBLIC_OPENAI_API_KEY=
EXPO_PUBLIC_JUDGE0_ENDPOINT=
```

Create a `.env` file in `backend/`:

```env
PORT=4000
JWT_SECRET=replace-me
POSTGRES_URL=
REDIS_URL=
```

## Getting Started

### 1) Install mobile dependencies

```bash
npm install
```

### 2) Run mobile app (Expo)

```bash
npm run start
```

Then press `a` in the Expo terminal to open Android, or scan the QR code with Expo Go.

### 3) Install backend dependencies

```bash
cd backend
npm install
```

### 4) Run backend API (development)

```bash
npm run dev
```

The API runs on `http://localhost:4000` by default.

## Available Scripts

### Root (Mobile)
- `npm run start` - Start Expo dev server
- `npm run android` - Run Android build
- `npm run ios` - Run iOS build
- `npm run web` - Run web preview
- `npm run typecheck` - Run TypeScript checks
- `npm run lint` - Run lint checks

### Backend
- `npm run dev` - Start backend with hot reload
- `npm run build` - Build backend TypeScript
- `npm run start` - Run compiled backend

## Backend API Routes

Base URL: `http://localhost:4000`

- `GET /health`
- `POST /v1/auth/*`
- `GET|POST /v1/courses/*`
- `GET|POST /v1/live/*`
- `GET|POST /v1/quizzes/*`
- `GET|POST /v1/certificates/*`
- `GET|POST /v1/chat/*`
- `GET|POST /v1/ai/*`
- `GET|POST /v1/notifications/*`

## Deployment Notes

- Expo/EAS config is included (`eas.json`) for app builds.
- An APK artifact may be generated as part of your build pipeline.
- Add real provider keys/endpoints before enabling production integrations.

## License

This project is currently unlicensed. Add a `LICENSE` file if you plan to open-source it.
