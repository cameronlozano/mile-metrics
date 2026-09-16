const Header = () => {
  return (
    <div className='xs:pb-4.5 xs:items-start flex flex-col items-center'>
      <h1 className='text-color-header-primary xs:text-start xs:bg-clip-text xs:bg-linear-to-r xs:from-color-header-primary via-text-color-header-tertiar xs:to-color-brand-primary xs:text-transparent xs:text-(length:--font-30px) xs:leading-none xs:pb-1 w-full pb-1 text-center text-(length:--font-54px) leading-15 font-bold tracking-tighter lg:text-8xl'>
        MileMetrics
      </h1>

      <p className='xs:w-35 xs:pl-0.5 xs:text-xs xs:leading-none xs:text-(length:--font-10px) text-color-subtle xs:pb-2.5 pb-4.5 pl-1 text-sm leading-1 font-medium tracking-tighter'>
        A smarter way to track every mile
      </p>

      <p className='xs:w-[40%] xs:text-(length:--font-9px) text-color-subtle xs:font-light xs:pl-0 xs:text-start w-[70%] pl-1.5 text-center text-(length:--font-9px) font-medium text-pretty lg:w-100'>
        Log your drives, organize your records, and get IRS-ready reports - all
        in one place
      </p>
    </div>
  );
};

export default Header;
