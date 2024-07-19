import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Store } from './stores/Store.ts'

const fetcher = (url: RequestInfo | URL) => window.fetch(url).then((response) => response.json())
export const store = Store.create(
    {},
    {
        fetch: fetcher
    }
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
        <App/>
  </React.StrictMode>,
)
