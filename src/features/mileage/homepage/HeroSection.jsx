import Header from './Header';
import HeroActions from './HeroActions';
import HeroImg from './HeroImg';

const HeroSection = () => {
  return (
    <>
      <HeroImg />

      <div className='relative z-100 flex place-items-center pb-6.75 pl-10'>
        <Header />
      </div>

      <HeroActions />
    </>
  );
};

export default HeroSection;
