import { createContext, useState } from 'react';
import { ChildrenProps } from 'types/models';

type SidebarContextType = {
    isOpened: boolean;
    setIsOpened: (isOpened: boolean) => void;
}

export const SidebarContext = createContext({} as SidebarContextType);

export const SidebarProvider = ({children}: ChildrenProps) => {
    
  const [isOpened, setIsOpened] = useState(false);
    
  return (
    <SidebarContext.Provider value={{isOpened, setIsOpened}}>
      {children}
    </SidebarContext.Provider>
  );
};


