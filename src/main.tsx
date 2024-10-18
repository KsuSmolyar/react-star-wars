import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './containers/App'
import './styles/index.css'
import { store } from './store/store';
import { Provider } from 'react-redux';
import { ThemeProvider } from './context/ThemeProvider';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store = { store }>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Provider>
  </StrictMode>,
)
