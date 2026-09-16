import img from '../../../assets/Hero.png';

const HeroImg = () => {
  return (
    <>
      <img
        src={img}
        className='xs:absolute xs:top-0 h-[clamp(4rem,calc(2.222rem+8.889vw),5rem)] w-full object-cover object-[0px_-3rem]'
      />
    </>
  );
};

export default HeroImg;
