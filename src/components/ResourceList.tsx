'use client';

import React, { useEffect } from 'react';
import ResourceListHeader from './ResourceListHeader';
import ResourceCard from './ResourceCard';
import { Button } from '@/components/ui/button';
import { getResources } from '@/sanity/actions';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';

const ResourceList = () => {
  const params = useSearchParams();
  const search = params.get('search') || '';
  const category = params.get('category') || '';

  // const { data } = useQuery({
  //   queryKey: ['resources', searchParams],
  //   queryFn: () =>
  //     getResources({
  //       query: searchParams?.search || '',
  //       category: searchParams?.category || '',
  //       page: '1',
  //     }),
  // });

  const { data: items, isLoading } = useQuery({
    queryKey: ['resources'],
    queryFn: () => getResources({ query: search, category: category, page: '1' }),
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!items) {
    return <p>No resources found</p>;
  }
  // console.log('Resources', data);

  // const fetchRecources = async () => {
  //   const resources = await getResources({
  //     page: '1',
  //     query: search,
  //     category: category,
  //   });

  //   setResources(resources);
  // };

  // useEffect(() => {
  //   fetchRecources();
  // }, [params]);

  return (
    <section className='flex-center mt-6 w-full flex-col sm:mt-20'>
      <ResourceListHeader title='Courses' search={search} category={category} />

      <div className='mt-12 flex w-full flex-wrap justify-center gap-16 sm:justify-start'>
        {items?.length > 0 ? (
          items.map((resource: any) => (
            <ResourceCard
              key={resource._id}
              title={resource.title}
              id={resource._id}
              image={resource.image}
              downloadNumber={resource.views}
              downloadLink={resource.downloadLink}
            />
          ))
        ) : (
          <p className='body-regular text-white-400'>No resources found</p>
        )}
      </div>
    </section>
  );
};

export default ResourceList;
