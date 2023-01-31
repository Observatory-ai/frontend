/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GOOGLE_AUTH_CLIENT_ID: string;
  readonly VITE_GRAPHQL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
