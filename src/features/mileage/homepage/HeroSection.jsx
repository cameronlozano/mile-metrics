import Header from './Header';
import HeroActions from './HeroActions';
import HeroEyebrow from './HeroEyebrow';
import HeroImg from './HeroImg';

import cn from '../../../utils/cn';

const HeroSection = () => (
  // CONTAINER
  <div className={cn('grid grid-rows-1')}>
    <div className={cn('col-start-1 row-start-1')}>
      <HeroImg />
    </div>

    <div className={cn('px-space-xs col-start-1 row-start-1')}>
      <Header />
    </div>
  </div>
);

export default HeroSection;
