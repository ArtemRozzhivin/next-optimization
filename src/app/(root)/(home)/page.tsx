import Filters from '@/components/Filters';
import SearchForm from '@/components/SearchForm';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function Home() {
  return (
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
    </main>
  );
}
