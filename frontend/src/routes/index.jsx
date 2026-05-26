import { Routes, Route } from 'react-router-dom'

import HomePage from '../pages/HomePage'
import DashboardPage from '../pages/DashboardPage'
import WorkspacePage from '../pages/WorkspacePage'
import ChatPage from '../pages/ChatPage'
import SettingsPage from '../pages/SettingsPage'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/workspace" element={<WorkspacePage />} />
      <Route path="/chat" element={<ChatPage />} />
      <Route path="/settings" element={<SettingsPage />} />
    </Routes>
  )
}

export default AppRoutes