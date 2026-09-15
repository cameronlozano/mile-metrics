import img from '../../../assets/Hero.png';

const HeroImg = () => {
  return (
    <>
      <img
        src={img}
        className='h-[clamp(4.25rem,calc(-2.861rem+35.556vw),8.25rem)] w-full object-cover object-[0px_-3rem] lg:absolute lg:top-0'
      />
    </>
  );
};

export default HeroImg;
