import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { applyPolyfills, defineCustomElements } from "h8k-components/loader";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

applyPolyfills().then(() => {
  defineCustomElements(window);
});