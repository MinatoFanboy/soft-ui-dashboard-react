// import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App.tsx';
import { GlobalProvider } from '~/context';

createRoot(document.getElementById('root')!).render(
    // <StrictMode>
    <BrowserRouter>
        <GlobalProvider>
            <App />
        </GlobalProvider>
    </BrowserRouter>,
    // </StrictMode>,
);
