'use client';

import React, { useEffect } from 'react';
import ResourceListHeader from './ResourceListHeader';
import ResourceCard from './ResourceCard';
import { Button } from '@/components/ui/button';
import { getResources } from '@/sanity/actions';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { Playlist } from '@/types/resources';

interface IResourcePlaylistProps {
  playlist: Playlist;
}

const ResourcePlaylist = ({ playlist }: IResourcePlaylistProps) => {
  const params = useSearchParams();

  if (!playlist) {
    return <p>No resources found</p>;
  }

  return (
    <section className='flex-center mt-6 w-full flex-col sm:mt-20'>
      <ResourceListHeader title={playlist.title} />

      <div className='mt-12 flex w-full flex-wrap justify-center gap-16 sm:justify-start'>
        {playlist.resources?.length > 0 ? (
          playlist.resources.map((resource: any) => (
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

export default ResourcePlaylist;
