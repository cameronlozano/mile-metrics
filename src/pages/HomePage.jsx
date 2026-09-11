import BuiltWith from '../features/mileage/homepage/BuiltWith';
import HeroSection from '../features/mileage/homepage/HeroSection';
import HowItWorks from '../features/mileage/homepage/HowItWorks';
import ProductHighlights from '../features/mileage/homepage/ProductHighlights';

export default function HomePage() {
  return (
    // Container
    <div className='w-full bg-white pb-10'>
      <section className='relative pt-4.5 pb-9'>
        <HeroSection />
      </section>

      <section className='relative mb-12 pl-2'>
        <ProductHighlights />

        <div className='absolute -top-5.75 right-15'>
          <BuiltWith />
        </div>
      </section>

      <section className=''>
        <HowItWorks />
      </section>
    </div>
  );
}
