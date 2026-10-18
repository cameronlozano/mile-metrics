import cn from '../../../utils/cn';

const Header = () => {
  return (
    <div className={cn('gap-space-2xs mx-auto flex flex-col text-center')}>
      <p className='text-text-subtitle text-xs font-extralight tracking-widest uppercase'>
        A brighter future awaits
      </p>

      <h1 className='text-text-heading text-size-header-secondary font-medium tracking-tight'>
        Welcome Back
      </h1>

      <p className='text-text-subtitle text-xs font-light'>
        Sign in to access your mileage records
      </p>
    </div>
  );
};

export default Header;
