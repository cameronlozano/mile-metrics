import Header from './Header';
import HeroActions from './HeroActions';
import HeroImg from './HeroImg';

const HeroSection = () => {
  return (
    <>
      <HeroImg />

      <div className='relative z-100 flex place-items-center items-center justify-center pt-20 pb-8 pl-2 lg:pl-10'>
        <Header />
      </div>

      <div>
        <HeroActions />
      </div>
    </>
  );
};

export default HeroSection;
