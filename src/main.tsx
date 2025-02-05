// src/main.tsx

import React from 'react';
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import { ApiProvider } from './providers/ApiContext'; // Import ApiProvider
import App from './App';

const root = createRoot(document.getElementById('root')!);

root.render(
  <Auth0Provider
    domain={import.meta.env.VITE_AUTH0_DOMAIN as string}
    clientId={import.meta.env.VITE_AUTH0_CLIENT_ID as string}
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <ApiProvider> {/* Wrap App inside ApiProvider */}
      <App />
    </ApiProvider>
  </Auth0Provider>
);
