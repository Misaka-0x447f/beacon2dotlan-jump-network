import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';

import { styleReset } from 'react95';
import { css, Global } from '@emotion/react';
/* Pick a theme of your choice */
import original from 'react95/dist/themes/original';
import { ThemeProvider } from 'styled-components';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Global styles={css`
        ${styleReset}
    `} />
    <ThemeProvider theme={original}>
      <App />
    </ThemeProvider>
  </StrictMode>,
);
