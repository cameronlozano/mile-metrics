import Header from './Header';
import HeroActions from './HeroActions';
import HeroEyebrow from './HeroEyebrow';
import HeroImg from './HeroImg';

const HeroSection = () => (
  <div className='grid grid-cols-1'>
    <div className='xs:col-start-1 xs:row-start-1 pb-2.5'>
      <HeroImg />
    </div>

    <div className='xs:pb-5'>
      <HeroEyebrow />
    </div>

    <div className='xs:col-start-1 xs:row-start-1 xs:pb-0.5 xs:pt-1.5 pb-4 pl-1.5'>
      <Header />
    </div>

    <HeroActions />
  </div>
);

export default HeroSection;
