const Header = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <p className='text-color-subtle pb-3.5 text-xs font-medium tracking-[0.2rem] uppercase'>
        A brighter future awaits
      </p>

      <div className='flex flex-col items-center gap-0.5'>
        <h1 className='text-color-header-primary-dark text-size-header-secondary font-medium tracking-tight'>
          Welcome Back
        </h1>
        <p className='text-color-subtle'>
          Sign in to access your mileage records
        </p>
      </div>
    </div>
  );
};

export default Header;
