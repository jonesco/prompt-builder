import React from 'react'
import ReactDOM from 'react-dom/client'
import PromptBuilder from '../prompt_builder.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PromptBuilder />
  </React.StrictMode>,
)
