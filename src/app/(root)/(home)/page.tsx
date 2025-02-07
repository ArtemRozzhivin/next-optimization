import Filters from '@/components/Filters';
import ResourceList from '@/components/ResourceList';
import ResourcePlaylist from '@/components/ResourcePlaylist';
import SearchForm from '@/components/SearchForm';
import { getResources, getResourcesPlaylists } from '@/sanity/actions';
import { Playlist } from '@/types/resources';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
  useQuery,
} from '@tanstack/react-query';

const Home = async ({ searchParams }: { searchParams: any }) => {
  const queryClient = new QueryClient();
  const isSearchingResources = searchParams?.search || searchParams?.category;
  const resourcePlaylists = await getResourcesPlaylists();

  await queryClient.prefetchQuery({
    queryKey: ['resources', searchParams?.search, searchParams?.category],
    queryFn: () =>
      getResources({
        query: searchParams?.search || '',
        category: searchParams?.category || '',
        page: '1',
      }),
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

        {isSearchingResources && <ResourceList />}

        {!isSearchingResources && (
          <ul>
            {resourcePlaylists.map((resourcePlaylist: Playlist) => (
              <li>
                <ResourcePlaylist playlist={resourcePlaylist} />
              </li>
            ))}
          </ul>
        )}
      </main>
    </HydrationBoundary>
  );
};

export default Home;
