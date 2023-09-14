import { ChevronFirst, ChevronLast } from 'lucide-react';
import { menus } from './menus';
import { SidebarItem } from './SidebarItem';
import { Theme } from '../theme/Theme';
import { useSidebar } from '@/dashboard/hooks';
import { useLocation } from 'react-router-dom';

export const Sidebar = () => {

  const { isOpened, setIsOpened } = useSidebar();
  const { pathname } = useLocation();

  return (
    <aside className={'absolute top-0 left-0 bottom-0'}>
      <nav className="h-full flex flex-col bg-white border-r shadow-sm dark:bg-gray-800 dark:border-gray-600">
        <div className="p-4 pb-2 flex justify-between items-center">
          {/* <img src="https://img.logoipsum.com/243.svg" alt="logo" className={`overflow-hidden transition-all ${isOpened ? 'w-32' : 'w-0'}`} /> */}
          <span className={`overflow-hidden transition-all font-bold ${isOpened ? 'w-32' : 'w-0'} dark:text-white`}>     
            ClawITS
          </span>
          <button 
            onClick={() => setIsOpened(!isOpened)}
            className="p-1.5 rounded-lg bg-gray-50 text-black hover:bg-gray-100">
            {
              isOpened
                ? (<ChevronFirst />)
                : (<ChevronLast />)
            }
          </button>
        </div>

        <div className='flex-1 px-3'>
          <ul className="border-t">
            {
              menus.map((menu, key) => (
                <SidebarItem icon={<menu.icon size={20}/>} text={menu.text} key={key} active={menu.link === pathname} isOpenMenu={isOpened} />
              ))
            }
          </ul>
          <Theme isOpened={isOpened} /> 
          

        </div>

        <div className="border-t flex p-3">
          <img className='w-10 h-10 rounded-md' src='https://via.placeholder.com/150' alt='avatar' />
          <div
            className={`flex justify-between items-center overflow-hidden transition-all ${isOpened ? 'w-52 ml-3' : 'w-0'}`}
          >
            <div className='leading-4'>
              <h4 className='font-semibold text-sm text-gray-800 dark:text-white'>
                John Doe
              </h4>
              <span className='text-xs text-gray-600 dark:text-white'>
                johnDoe@gmail.com
              </span>
            </div>
          </div>
        </div>
      </nav>
    </aside>
  );
};
