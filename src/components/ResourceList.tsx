import React from 'react';
import ResourceListHeader from './ResourceListHeader';
import ResourceCard from './ResourceCard';
import { Button } from '@/components/ui/button';
import { getResources } from '@/sanity/actions';
import Image from 'next/image';

const ResourceList = async () => {
  const resources = await getResources({
    page: '1',
    query: '',
    category: '',
  });
  const searchParams = '';

  return (
    <section className='flex-center mt-6 w-full flex-col sm:mt-20'>
      <ResourceListHeader
        query={searchParams?.query || ''}
        category={searchParams?.category || ''}
      />

      <div className='mt-12 flex w-full flex-wrap justify-center gap-16 sm:justify-start'>
        {resources?.length > 0 ? (
          resources.map((resource: any) => (
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
