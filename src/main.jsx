import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import ReactGA from "react-ga4";


ReactGA.initialize("G-1XK3C0PH3Z");

ReactGA.send({ hitType: "pageview",
   page: "/my-path", 
   title: "Custom Title" });

   createRoot(document.getElementById('root')).render(
  <StrictMode>
  <BrowserRouter>
    <App />
    </BrowserRouter>
  </StrictMode>,
)
