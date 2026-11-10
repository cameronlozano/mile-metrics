import Box from '../../../ui/layout/Box';
import HeroImg from '../../../assets/Hero.png';
import Header from './Header';
import HeroActions from './HeroActions';

import cn from '../../../utils/cn';
import Frame from '../../../ui/layout/Frame';
import Stack from '../../../ui/layout/Stack';

const HeroSection = () => (
  <Box padding='pt-page-offset-top-sm' background='bg-white'>
    <Stack spacing='space-y-space-sm'>
      <Header />

      <Frame
        aspectRatio='aspect-[16/9]'
        className='col-start-1 row-start-1 h-full w-full'
      >
        <img
          className={cn('h-full w-full object-cover object-[70%]')}
          src={HeroImg}
        />
      </Frame>

      <HeroActions />
    </Stack>
  </Box>
);

export default HeroSection;
