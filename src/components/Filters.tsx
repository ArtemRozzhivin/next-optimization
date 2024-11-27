'use client';

import React from 'react';
import { cn } from '@/lib/utils';

const links = ['All', 'Next JS', 'Frontend', 'Backend', 'Fullstack'];

const Filters = () => {
  const [active, setActive] = React.useState('All');

  const handleActive = (link: string) => {
    setActive(link);
  };

  return (
    <div>
      <ul className='text-white-800 body-text no-scrollbar flew w-full max-w-full gap-2 overflow-auto py-12 sm:max-w-2xl'>
        {links.map((link) => (
          <li key={link} className='inline-block mr-2'>
            <button
              onClick={() => handleActive(link)}
              className={cn(
                'whitespace-normal rounded-lg px-8 py-2.5 capitalize',
                active === link && 'gradient_blue-purple',
              )}>
              {link}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Filters;
