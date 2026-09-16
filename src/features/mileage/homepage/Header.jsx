const Header = () => {
  return (
    <div className='relative flex w-full flex-col'>
      {/* Primary header */}
      <div className='xs:pb-4.5 flex flex-col pb-5'>
        <h1 className='text-color-header-primary xs:bg-clip-text xs:bg-linear-to-r xs:from-color-header-primary via-text-color-header-tertiar xs:to-color-brand-primary xs:text-transparent xs:text-(length:--font-30px) xs:leading-none xs:pb-1 pb-1.5 text-(length:--font-54px) leading-15 font-bold tracking-tighter lg:text-8xl'>
          MileMetrics
        </h1>

        <p className='xs:w-35 xs:text-xs xs:leading-none pl-1.25 text-sm leading-1 font-medium tracking-tighter text-gray-500/75 lg:text-xl'>
          A smarter way to track every mile
        </p>
      </div>

      <p className='xs:w-[90%] xs:mx-auto xs:text-xs xs:font-semibold xs:text-start w-70 pl-1.5 text-sm font-medium text-pretty text-gray-500/75 lg:w-100'>
        Log your drives, organize your records, and get IRS-ready reports - all
        in one place
      </p>
    </div>
  );
};

export default Header;
