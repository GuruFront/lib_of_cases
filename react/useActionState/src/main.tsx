import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import App_with_useActionState from "./App_with_useActionState.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <>
        <App />
        <hr/>
        <App_with_useActionState />
    </>
  </StrictMode>,
)
