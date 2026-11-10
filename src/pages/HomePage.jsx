import BuiltWith from '../features/mileage/homepage/BuiltWith';
import HeroSection from '../features/mileage/homepage/HeroSection';
import HowItWorks from '../features/mileage/homepage/HowItWorks';
import ProductHighlights from '../features/mileage/homepage/ProductHighlights';

import Stack from '../ui/layout/Stack';
import Box from '../ui/layout/Box';

export default function HomePage() {
  return (
    <main>
      <Stack spacing='space-y-space-xl'>
        <Stack renderAs='section' spacing='space-y-space-sm'>
          <HeroSection />

          <hr className='border-border-faint my-8 border-0 border-t' />
        </Stack>

        <section>
          <ProductHighlights />
        </section>

        <Box
          renderAs={'section'}

          background='bg-bg-default'

          padding='py-space-xs'

          border='border-y'
          borderStyles='border-border-faint'
        >
          <HowItWorks />
        </Box>

        <section className=''>
          <BuiltWith />
        </section>
      </Stack>
    </main>
  );
}
