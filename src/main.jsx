import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { InterestProvider } from './Context/InterestContext.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
<InterestProvider>
        <App />
</InterestProvider>


  </StrictMode>,
)
