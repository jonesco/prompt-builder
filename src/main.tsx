import React from 'react'
import ReactDOM from 'react-dom/client'
import PromptBuilder from '../prompt_builder.tsx'
import './index.css'

console.log('Starting AI Prompt Builder application...')

try {
  const rootElement = document.getElementById('root')
  if (!rootElement) {
    throw new Error('Root element not found')
  }
  
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <PromptBuilder />
    </React.StrictMode>,
  )
  
  console.log('Application rendered successfully')
} catch (error) {
  console.error('Failed to render application:', error)
  document.body.innerHTML = `
    <div style="padding: 20px; font-family: Arial, sans-serif;">
      <h1>Error Loading AI Prompt Builder</h1>
      <p>There was an error loading the application. Please try refreshing the page.</p>
      <p>Error: ${error instanceof Error ? error.message : 'Unknown error'}</p>
    </div>
  `
}
