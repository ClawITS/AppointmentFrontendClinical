import { createBrowserRouter } from 'react-router-dom';
import { PrivateLayout } from '@/dashboard/layouts';

export const router = createBrowserRouter([
    {
    path: '/',
    element: <PrivateLayout />,
    }
]);