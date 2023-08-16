import React from 'react'
import ReactDOM from 'react-dom/client'

import RoutedPage from './routes'

import "./general.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RoutedPage />
  </React.StrictMode>,
)
