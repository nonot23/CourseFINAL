import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from './App.tsx';
import { AuthCourse } from './Components/Context/AuthCourse.tsx'; 

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <AuthCourse>
        <App />
      </AuthCourse>
    </BrowserRouter>
  </StrictMode>
);