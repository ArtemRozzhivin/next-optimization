'use client';

import React, { useEffect } from 'react';
import ResourceListHeader from './ResourceListHeader';
import ResourceCard from './ResourceCard';
import { Button } from '@/components/ui/button';
import { getResources } from '@/sanity/actions';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';

const ResourceList = () => {
  const params = useSearchParams();
  const search = params.get('search') || '';
  const category = params.get('category') || '';
  const [resources, setResources] = React.useState<any>([]);

  const fetchRecources = async () => {
    const resources = await getResources({
      page: '1',
      query: search,
      category: category,
    });

    setResources(resources);
  };

  useEffect(() => {
    fetchRecources();
  }, [params]);

  return (
    <section className='flex-center mt-6 w-full flex-col sm:mt-20'>
      <ResourceListHeader search={search} category={category} />

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
