import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './styles/fonts.css';
import './styles/site.css';
import App from './App.jsx';

// StrictMode is left off on purpose: the original site runs without it in production,
// and its scroll/animation effects assume effects mount once.
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
