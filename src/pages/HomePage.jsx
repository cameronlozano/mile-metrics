import BuiltWith from '../features/mileage/homepage/BuiltWith';
import HeroSection from '../features/mileage/homepage/HeroSection';
import HowItWorks from '../features/mileage/homepage/HowItWorks';
import ProductHighlights from '../features/mileage/homepage/ProductHighlights';

export default function HomePage() {
  return (
    // Container
    <div className='w-full bg-white pb-5'>
      <section className='relative mb-10 lg:pb-9'>
        <HeroSection />
      </section>

      <section className='relative flex flex-col gap-3 lg:mb-12'>
        <ProductHighlights />

        <div className='right-15 lg:absolute lg:-top-5.75'>
          <BuiltWith />
        </div>
      </section>

      <section>
        <HowItWorks />
      </section>
    </div>
  );
}
