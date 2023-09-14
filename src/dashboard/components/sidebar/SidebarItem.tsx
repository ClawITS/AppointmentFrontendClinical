import type { LucideIcon } from 'lucide-react';

type Props = {
    icon: React.ReactElement<LucideIcon, string >;
    text: string;
    active?: boolean;
    isOpenMenu: boolean;
}

export const SidebarItem = ({icon, text, active, isOpenMenu}: Props) => {
  return (
    <li className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer group ${
      active 
        ? 'bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800'
        : 'text-gray-600 dark:text-white hover:bg-indigo-50 dark:hover:bg-gray-700'
    }`}>
      {icon}
      <span className={`overflow-hidden transition-all ${isOpenMenu ? 'w-52 ml-3': 'w-0'}`}>
        {text}
      </span>

      {!isOpenMenu && (
        <div className='absolute left-full rounded-md px-2 py-1 ml-6 bg-indigo-100 text-indigo-800 text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 whitespace-nowrap group-hover:translate-x-0'>
          {text}
        </div>
      )}

    </li>
  );
};
