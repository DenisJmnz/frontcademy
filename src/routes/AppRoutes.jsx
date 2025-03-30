import { Routes, Route } from 'react-router-dom';
import LandingPageDesktop from '../components/LandingPage/LandingPageDesktop';
import LogoPreview from '../components/LogoPreview/LogoPreview';
import MasterFullStack from '../pages/MasterFullStack';
import MasterIA from '../pages/MasterIA';
import MasterDataScience from '../pages/MasterDataScience';
import MasterCiberseguridad from '../pages/MasterCiberseguridad';
import ContactForm from '../pages/ContactForm';
import TechBlog from '../components/TechBlog/TechBlog';
import AdminChat from '../components/AdminChat';
import AdminLogin from '../components/AdminLogin';
import ProtectedRoute from '../components/ProtectedRoute';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPageDesktop />} />
      <Route path="/home" element={<LandingPageDesktop />} />
      <Route path="/masters" element={<div>Página de Masters</div>} />
      <Route path="/profesores" element={<div>Página de Profesores</div>} />
      <Route path="/contacto" element={<ContactForm />} />
      <Route path="/logo-preview" element={<LogoPreview />} />
      
      {/* Rutas de los másters */}
      <Route path="/master-fullstack" element={<MasterFullStack />} />
      <Route path="/master-ia" element={<MasterIA />} />
      <Route path="/master-data-science" element={<MasterDataScience />} />
      <Route path="/master-ciberseguridad" element={<MasterCiberseguridad />} />
      <Route path="/blog" element={<TechBlog />} />
      <Route path="/login" element={<AdminLogin />} />
      <Route path="/admin" element={
        <ProtectedRoute>
          <AdminChat />
        </ProtectedRoute>
      } />
    </Routes>
  );
};

export default AppRoutes; 