import { Route, Routes } from 'react-router-dom';
import './App.css';
import { LoginAuth } from './auth/LoginAuth';
import RequireAuth from './auth/RequireAuth';
import DashBoard from './pages/DashBoard/DashBoard';
import { LoginPage } from './pages/LoginPage';

function App() {
  return (
    <div className="App">
      <Routes >
        <Route element={<LoginAuth />}>
          <Route path='/login' element={<LoginPage />} />
        </Route>
        <Route element={<RequireAuth />}>
          <Route path='/dashboard' element={<DashBoard />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
