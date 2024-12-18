import { ErrorBoundary } from "./components/ErrorBoundary"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Routes>
          <Route path="/" element={<></>} />
        </Routes>
      </Router>
    </ErrorBoundary>
  )
}

export default App
