import Box from '../../../ui/layout/Box';
import HeroImg from '../../../assets/Hero.png';
import Header from './Header';

import cn from '../../../utils/cn';
import Frame from '../../../ui/layout/Frame';

const HeroSection = () => (
  <Box
    border='border-b'
    borderStyles='border-border-muted'
    className={cn('grid h-[clamp(7.5rem,1rem+32.5vw,40rem)]')}
  >
    <Frame
      aspectRatio='aspect-[21/9]'
      className='col-start-1 row-start-1 h-full w-full'
    >
      <img
        className={cn('h-full w-full object-cover object-[60%_center]')}
        src={HeroImg}
      />
    </Frame>

    <Box className='col-start-1 row-start-1'>
      <Header />
    </Box>
  </Box>
);

export default HeroSection;
