import Stack from '../../../ui/layout/Stack';

const Header = () => {
  return (
    <Stack spacing='space-y-space-2xs'>
      <p className='text-text-subtitle text-xs font-extralight tracking-widest uppercase'>
        A brighter future awaits
      </p>

      <h1 className='text-text-heading text-size-header-secondary font-medium tracking-tight'>
        Welcome Back
      </h1>

      <p className='text-text-subtitle text-xs font-light'>
        Sign in to access your mileage records
      </p>
    </Stack>
  );
};

export default Header;
