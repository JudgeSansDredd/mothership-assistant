/// <reference types="vite/client" />

// VITE provided environment variables can be defined here for type safety
// https://vite.dev/guide/env-and-mode.html#intellisense-for-typescript
interface ImportMetaEnv {
  readonly VITE_ENVIRONMENT: string;
}
