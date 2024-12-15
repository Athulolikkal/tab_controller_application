import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import LoginScreenPage from "./pages/loginScreen/loginScreen"
import AppScreenPage from "./pages/appScreen/appScreen"
import HomeScreenPage from "./pages/homeScreen/homeScreen"
import AuditLogScreenPage from "./pages/auditlogScreen/auditlog"

function App() {


  return (
    <>
    {/* For now routes are not protected ... */}
      <Router>
        <Routes>
          <Route path="/" element={<LoginScreenPage />} />
          <Route path="/home" element={<HomeScreenPage />} />
          <Route path="/app/:id" element={<AppScreenPage />} />
          <Route path="/audit-log" element={<AuditLogScreenPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
