import Header from './Header';
import HeroActions from './HeroActions';
import HeroEyebrow from './HeroEyebrow';
import HeroImg from './HeroImg';

const HeroSection = () => {
  return (
    <>
      <div className='xs:h-0 relative'>
        <HeroImg />
        <HeroEyebrow />
      </div>

      <div className='xs:pl-1 relative z-100 flex items-center pb-5 pl-5'>
        <Header />
      </div>

      <div>
        <HeroActions />
      </div>
    </>
  );
};

export default HeroSection;
