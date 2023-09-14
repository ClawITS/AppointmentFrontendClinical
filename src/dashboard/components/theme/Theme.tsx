import { useState } from 'react';
import { ChevronDown, ChevronUp, Palette } from 'lucide-react';
import { useTheme } from '@/dashboard/hooks';
import { themes } from './themes';
import { OptionTheme } from 'types/models';

type Props = {
    isOpened : boolean;
}

export const Theme = ({isOpened}: Props) => {

  const [subMenuIsOpened, setSubMenuIsOpened] = useState(false);
  const { setTheme } = useTheme();

  return (
    <>
      <div 
        onClick={() => setSubMenuIsOpened(!subMenuIsOpened)}
        className={'relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer hover:bg-indigo-50 text-gray-600 dark:text-white dark:hover:bg-gray-700'}>
        <Palette size={20}/>
        <span className={`overflow-hidden transition-all ${isOpened ? 'w-52 ml-3': 'w-0'}`}>
          Themes
        </span>
        {
          isOpened
            ? (subMenuIsOpened ? (<ChevronUp className='absolute right-3' size={20}/>) : (<ChevronDown className='absolute right-3' size={20}/>))
            : null
        }
      </div>

      <div className={`flex flex-col ${subMenuIsOpened ? 'visible opacity-100': 'invisible opacity-0'} transition-all`}>	
        {
          themes.map((theme, key) => (
            <button
              key={key} 
              onClick={() => setTheme(theme.name as OptionTheme)}
              className='py-2 px-3 my-1 font-medium rounded-md flex items-center hover:bg-indigo-50 text-gray-600 dark:text-white hover:text-indigo-800 dark:hover:bg-gray-700'>
              {<theme.icon size={20} />}
              <span className={`overflow-hidden transition-all block text-left whitespace-nowrap ${isOpened ? 'w-52 ml-3': 'w-0'}`}>
                {theme.text}
              </span>
            </button>
          ))
        }
      </div>
    </>
  );
};


// absolute left-full rounded-md px-2 py-1 ml-6 bg-indigo-100 text-indigo-800 text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 whitespace-nowrap group-hover:translate-x-0