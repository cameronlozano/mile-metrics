import BuiltWith from '../features/mileage/homepage/BuiltWith';
import HeroEyebrow from '../features/mileage/homepage/HeroEyebrow';
import HeroSection from '../features/mileage/homepage/HeroSection';
import HowItWorks from '../features/mileage/homepage/HowItWorks';
import ProductHighlights from '../features/mileage/homepage/ProductHighlights';
import cn from '../utils/cn';

export default function HomePage() {
  return (
    // Container
    <div className={cn('mx-space-xs grid grid-cols-4')}>
      <section
        className={cn(
          '-mx-space-xs mb-space-2xs border-b-border-muted col-span-4 row-start-1 border-b',
        )}
      >
        <HeroSection />
      </section>

      <div className={cn('mb-space-sm col-span-4 col-start-1 row-start-2')}>
        <HeroEyebrow />
      </div>

      <section className='mb-space-sm col-span-4 col-start-1 row-start-3'>
        <ProductHighlights />
      </section>

      <section
        className={cn(
          '-mx-space-xs mb-space-sm col-span-4 col-start-1 row-start-4',
        )}
      >
        <HowItWorks />
      </section>

      <section className='col-span-4 col-start-1 row-start-5'>
        <BuiltWith />
      </section>
    </div>
  );
}
