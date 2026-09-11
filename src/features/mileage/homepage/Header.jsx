import DotSeparator from '../../../ui/DotSeparator';
import cn from '../../../utils/cn';

const Header = () => {
  const liStyling = cn('flex text-xs font-medium text-gray-500/75 uppercase');
  return (
    <div>
      {/* TRACK - DEDUCT - GO FURTHER */}
      <ul className='mb-0.5 flex items-center gap-5 pl-1.5'>
        <li className={liStyling}>Track</li>
        <DotSeparator renderAs='li' />
        <li className={liStyling}>Deduct</li>
        <DotSeparator renderAs='li' />
        <li className={liStyling}>Go further</li>
      </ul>

      {/* Primary header */}
      <div className='pb-5'>
        <h1 className='text-8xl font-bold tracking-tight text-gray-800'>
          MileMetrics
        </h1>

        <p className='tracking- pl-1.25 text-xl font-medium text-gray-500/75'>
          A smarter way to track every mile
        </p>
      </div>

      <p className='w-100 pl-1.5 font-medium text-gray-500/75'>
        Log your drives, organize your records, and get IRS-ready reports - all
        in one place
      </p>
    </div>
  );
};

export default Header;
