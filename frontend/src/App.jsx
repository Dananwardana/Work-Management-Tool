import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 text-gray-900">
        <Routes>
          {/* Public Route */}
          <Route path="/login" element={<div className="flex h-screen items-center justify-center font-bold">Halaman Login</div>} />

          {/* Protected Routes (Nantinya) */}
          <Route path="/dashboard" element={<div className="p-8 font-bold">Dashboard Performa</div>} />

          {/* Default Route */}
          <Route path="/" element={<div className="flex h-screen items-center justify-center">Setup React SPA</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
