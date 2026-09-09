import Header from '../features/mileage/homepage/Header';

export default function Home() {
  return (
    <div className='w-full'>
      <div className='pb-16'>
        <Header />
      </div>

      <p className='bg-linear-to-t from-gray-200 via-gray-400 to-gray-500 bg-clip-text text-center text-2xl font-bold text-transparent'>
        Turn every drive into organized, tax-ready mileage records—fast
      </p>
    </div>
  );
}
