import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { Toaster } from "./components/ui/toaster.tsx";
import QueryClientProviderComponent from "./providers/query-provider.tsx";
import { ThemeProvider } from "./providers/theme-provider.tsx";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProviderComponent>
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <Router>
          <AppRoutes />
        </Router>
        <Toaster />
      </ThemeProvider>
    </QueryClientProviderComponent>
  </React.StrictMode>,
)
