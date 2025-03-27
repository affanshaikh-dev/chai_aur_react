import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/'
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ReactProvider router={router} />
  </StrictMode>,
)
