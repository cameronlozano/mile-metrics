import cn from '../../../utils/cn';
import DotSeparator from '../../../ui/DotSeparator';

const liStyling = cn(
  'flex text-(length:--font-11px) font-light text-gray-500/75 uppercase lg:text-xs',
);

const HeroEyebrow = () => (
  <ul className='mt-1.25 flex justify-center gap-5 lg:absolute lg:-top-1.5 lg:mb-0.5 lg:pl-1.5'>
    <li className={liStyling}>Track</li>
    <DotSeparator renderAs='li' />
    <li className={liStyling}>Deduct</li>
    <DotSeparator renderAs='li' />
    <li className={liStyling}>Go further</li>
  </ul>
);

export default HeroEyebrow;
