import Filters from '@/components/Filters';
import ResourceList from '@/components/ResourceList';
import ResourcePlaylist from '@/components/ResourcePlaylist';
import SearchForm from '@/components/SearchForm';
import { Button } from '@/components/ui/button';
import { getResources, getResourcesPlaylist } from '@/sanity/actions';
import { dehydrate, HydrationBoundary, QueryClient, useQuery } from '@tanstack/react-query';
import Image from 'next/image';

const Home = async ({ searchParams }: { searchParams: any }) => {
  const queryClient = new QueryClient();

  // await queryClient.prefetchQuery({
  //   queryKey: ['resources'],
  //   queryFn: () =>
  //     getResources({
  //       query: searchParams?.search || '',
  //       category: searchParams?.category || '',
  //       page: '1',
  //     }),
  // });

  await queryClient.prefetchQuery({
    queryKey: ['recourcePlaylist'],
    queryFn: () => getResourcesPlaylist(),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <main className='flex-center paddings mx-auto w-full max-w-screen-2xl flex-col'>
        <section className='nav-padding w-full'>
          <div className='flex-center relative min-h-[274px] w-full flex-col rounded-xl bg-banner bg-cover bg-center text-center'>
            <h1 className='sm:heading1 heading3 mb-6 text-center text-white'>
              JavaScript Mastery Resources
            </h1>
          </div>
          <SearchForm />
        </section>

        <section>
          <Filters />
        </section>

        {(searchParams?.search || searchParams?.category) && <ResourceList />}
        <ResourcePlaylist />
      </main>
    </HydrationBoundary>
  );
};

export default Home;
