import { Outlet } from 'react-router-dom';
import { Sidebar } from '../components';

export const PrivateLayout = () => {
  return (
    <div className='flex overflow-hidden w-screen'>
      <Sidebar />
      
      <main className={'container ml-10 py-6 px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-12'}>
        <Outlet />
      </main>

    </div>
  );
};
