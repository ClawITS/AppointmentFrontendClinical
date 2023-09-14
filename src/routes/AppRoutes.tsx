import { Routes, Route, Navigate } from 'react-router-dom';
import { PrivateLayout } from '@/dashboard/layouts';
import { SidebarProvider } from '@/dashboard/context/ui/SidebarContext';
import { Home } from '@/dashboard/pages';


export const AppRoutes = () => {
  return (
    <Routes >
      <Route path="/" element={(
        <SidebarProvider>
          <PrivateLayout />
        </SidebarProvider>
      )} >
        <Route path="home" element={<Home />} />
        <Route path='*' element={<Navigate to='/home' />} />
      </Route>
    </Routes>


  );
};
