import Header from './Header';
import HeroActions from './HeroActions';
import HeroImg from './HeroImg';

const HeroSection = () => {
  return (
    <>
      <HeroImg />

      <div className='relative z-100 flex items-center pt-20 pb-5 pl-5 lg:pl-10'>
        <Header />
      </div>

      <div>
        <HeroActions />
      </div>
    </>
  );
};

export default HeroSection;
