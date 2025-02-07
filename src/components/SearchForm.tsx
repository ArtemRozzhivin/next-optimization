'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Input } from './ui/input';
import { formUrlQuery } from '@/utils';
import { useRouter, useSearchParams } from 'next/navigation';
import { useDebounce } from 'use-debounce';

const SearchForm = () => {
  const [search, setSearch] = useState('');
  const [debouncedSearch] = useDebounce(search, 500);
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    let newUrl = '';

    if (debouncedSearch) {
      newUrl = formUrlQuery({
        params: searchParams.toString(),
        key: 'search',
        value: debouncedSearch,
      });
    } else {
      newUrl = formUrlQuery({
        params: searchParams.toString(),
        keysToRemove: ['search'],
      });
    }

    router.push(newUrl, { scroll: false });
  }, [debouncedSearch]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  console.log('debauncedSearch', debouncedSearch);
  console.log('search', search);

  return (
    <form className='flex-center mx-auto mt-10 w-full sm:-mt-10 sm:px-5'>
      <label className='flex-center relative w-full max-w-3xl'>
        <Image
          src='/magnifying-glass.svg'
          className='absolute left-8'
          width={32}
          height={32}
          alt='Search icon'
        />
        <Input
          className='base-regular h-fit border-0 bg-black-400 pr-4 py-3 md:py-6 pl-20 md:pr-8 text-white-800 !ring-0 !ring-offset-0 placeholder:text-white-800'
          type='text'
          placeholder='Search'
          value={search}
          onChange={handleSearch}
        />
      </label>
    </form>
  );
};

export default SearchForm;
