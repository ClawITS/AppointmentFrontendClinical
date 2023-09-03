import { Outlet } from 'react-router-dom';
import { Header, SideMenu } from '@/dashboard/components';

export const PrivateLayout = () => {
  return (
    <>

      <Header />
      <SideMenu />
      <Outlet />
    </>

  )
}
