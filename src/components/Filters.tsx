'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { useRouter, useSearchParams } from 'next/navigation';
import { formUrlQuery } from '@/utils';

const links = ['All', 'NextJS', 'Frontend', 'Backend', 'Fullstack'];

const Filters = () => {
  const [active, setActive] = React.useState('All');
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleFilter = (link: string) => {
    let newUrl = '';

    if (active === link) {
      setActive('');

      newUrl = formUrlQuery({
        params: searchParams.toString(),
        keysToRemove: ['category'],
      });
    } else {
      setActive(link);

      newUrl = formUrlQuery({
        params: searchParams.toString(),
        key: 'category',
        value: link.toLowerCase(),
      });
    }

    router.push(newUrl, { scroll: false });
  };

  return (
    <div>
      <ul className='text-white-800 body-text no-scrollbar flew w-full max-w-full gap-2 overflow-auto py-12 sm:max-w-2xl'>
        {links.map((link) => (
          <li key={link} className='inline-block mr-2'>
            <button
              onClick={() => handleFilter(link)}
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
