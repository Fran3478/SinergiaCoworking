import React from 'react'
import { Provider } from "react-redux";
import store from './redux/store/store.ts';
import ReactDOM from 'react-dom/client'
import { GoogleOAuthProvider } from '@react-oauth/google';
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
  <React.StrictMode>
    <GoogleOAuthProvider clientId={import.meta.env.VITE_CLIENT_ID_GOOGLE}>
      <App />
    </GoogleOAuthProvider>
  </React.StrictMode>
  </Provider>
)
