import { useContext } from 'react';
import { SidebarContext } from '../context/ui/SidebarContext';

export const useSidebar = () => {
  const state = useContext(SidebarContext);
  return {
    ...state
  };
};
