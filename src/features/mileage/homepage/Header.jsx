import DotSeparator from '../../../ui/DotSeparator';
import cn from '../../../utils/cn';

const Header = () => {
  const liStyling = cn(
    'flex text-(length:--font-11px) font-light text-gray-500/75 uppercase lg:text-xs',
  );
  return (
    <div className='relative flex w-full flex-col'>
      {/* TRACK - DEDUCT - GO FURTHER */}
      <ul className='mx-auto flex gap-5 lg:absolute lg:-top-1.5 lg:mb-0.5 lg:pl-1.5'>
        <li className={liStyling}>Track</li>
        <DotSeparator renderAs='li' />
        <li className={liStyling}>Deduct</li>
        <DotSeparator renderAs='li' />
        <li className={liStyling}>Go further</li>
      </ul>

      {/* Primary header */}
      <div className='pb-7'>
        <h1 className='text-color-header-primary pb-1.5 text-[3.375rem] leading-15 font-bold tracking-tighter lg:text-8xl'>
          MileMetrics
        </h1>

        <p className='pl-1.25 text-base leading-1 font-medium tracking-tighter text-gray-500/75 lg:text-xl'>
          A smarter way to track every mile
        </p>
      </div>

      <p className='w-70 pl-1.5 text-sm font-medium text-pretty text-gray-500/75 lg:w-100'>
        Log your drives, organize your records, and get IRS-ready reports - all
        in one place
      </p>
    </div>
  );
};

export default Header;
