import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Landingpage = React.lazy(() =>
  import('../components/Pages/LandingPage/LandingPage')
);
const KirimLimbah = React.lazy(() =>
  import('../components/Pages/KirimLimbah/KirimLimbah')
);
const TukarPoin = React.lazy(() =>
  import('../components/Pages/TukarPoin/TukarPoin')
);
const LoginPage = React.lazy(() =>
  import('../components/Pages/AuthPage/LoginPage')
);
const RegisterPage = React.lazy(() =>
  import('../components/Pages/AuthPage/RegisterPage')
);
const AuthPage = React.lazy(() =>
  import('../components/Pages/AuthPage/AuthPage')
);
const CekAdminPage = React.lazy(() =>
  import('../components/Pages/CekAdminPage/CekAdminPage')
);

const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Router>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/kirimlimbah" element={<KirimLimbah />} />
          <Route path="/tukarpoin" element={<TukarPoin />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/cek-admin" element={<CekAdminPage />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};

export default ProjectRoutes;
