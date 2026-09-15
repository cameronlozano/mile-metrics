import img from '../../../assets/Hero.png';

const HeroImg = () => {
  return (
    <>
      <img
        src={img}
        className='absolute top-0 w-full object-cover object-[0px_-3rem]'
      />
    </>
  );
};

export default HeroImg;
