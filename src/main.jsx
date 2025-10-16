import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home.jsx';
import { GoogleOAuthProvider } from '@react-oauth/google';


const clientId = String(import.meta.env.VITE_GOOGLE_CLIENT_ID);

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/home',
    element: <Home />
  }]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={clientId}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </GoogleOAuthProvider>
  </StrictMode>,
)
