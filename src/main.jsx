import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import App from './App.jsx'
import './index.css'
import { FormContextProvider } from './context/ContextoFormulario.jsx';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

  const query = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <BrowserRouter>
      <FormContextProvider>
        <QueryClientProvider client={query}>
          <App />
        </QueryClientProvider>
      </FormContextProvider>
    </BrowserRouter>
  </React.StrictMode>
)
