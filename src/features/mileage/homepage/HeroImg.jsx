import img from '../../../assets/Hero.png';

const HeroImg = () => {
  return (
    <>
      <img
        src={img}
        className='absolute -top-13 h-90 w-full object-cover object-[0px_-3rem]'
      />
    </>
  );
};

export default HeroImg;
