# HackCoder Academy (Expo + React Native + TypeScript)

Production-oriented LMS mobile app scaffold for HackCoder IT Services with a dark futuristic design system.

## Stack
- Expo SDK 51 (managed workflow)
- React Native + TypeScript
- React Navigation v6 (stack + tabs)
- Zustand (app/auth state)
- TanStack Query (data fetching)
- Reanimated + Gesture Handler
- SVG progress ring + animated skeleton loaders

## Implemented Architecture
- `src/constants`: theme and mock seed data
- `src/components`: glass UI kit, gradient buttons, skeletons, progress ring, state scaffolds
- `src/navigation`: root stack, auth stack, floating tab bar, deep linking
- `src/screens`: all requested primary screens and nested feature screens
- `src/state`: auth/app stores
- `src/services`: API clients and integration placeholders (AI, payments, notifications)
- `src/hooks`: courses query, biometric auth, OAuth

## Deep Links
- `hackcoder://course/:courseId`
- `hackcoder://course/:courseId/video/:lessonId`
- `hackcoder://live/:sessionId/room`
- `hackcoder://certificate/:certificateId`
- `hackcoder://instructor`

## Setup (Expo APK/App Build)
1. `npm install`
2. `npm run start`
3. Build APK/EAS from this Expo project

## Environment Variables (example)
Create `.env` and set:
- `EXPO_PUBLIC_AGORA_APP_ID`
- `EXPO_PUBLIC_STREAM_API_KEY`
- `EXPO_PUBLIC_STRIPE_PUBLISHABLE_KEY`
- `EXPO_PUBLIC_OPENAI_API_KEY`
- `EXPO_PUBLIC_JUDGE0_ENDPOINT`

## Notes
- App is frontend-first and can run with in-app mock data/services for Expo deployment.
- Live SDK features (Agora, Stream, Stripe, OpenAI, Judge0, SSO, FCM backend) are pre-wired at integration layer and become active when real keys/endpoints are added.
- All major screens include loading, empty, error, and offline handling via reusable scaffolds.
