import React from 'react'
import ReactDOM from 'react-dom/client'
import DashboardLayout from './layout/DashboardLayout'
import "./index.css"
import Body from './components/dashboard/Body'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <DashboardLayout>
      <Body/>
    </DashboardLayout>
  </React.StrictMode>,
)
