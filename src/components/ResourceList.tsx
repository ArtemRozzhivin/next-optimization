'use client';

import React from 'react';
import ResourceListHeader from './ResourceListHeader';
import ResourceCard from './ResourceCard';
import { getResources } from '@/sanity/actions';
import { useSearchParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';

const ResourceList = () => {
  const params = useSearchParams();
  const search = params.get('search') || '';
  const category = params.get('category') || '';

  const { data: items, isLoading } = useQuery({
    queryKey: ['resources', search, category],
    queryFn: () =>
      getResources({ query: search, category: category, page: '1' }),
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!items) {
    return <p>No resources found</p>;
  }

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
