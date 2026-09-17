import cn from '../../../utils/cn';
import DotSeparator from '../../../ui/DotSeparator';

const liStyling = cn(
  'flex text-[clamp(0.5rem,calc(0.023rem+2.065vw),2.5rem)] font-light text-gray-500/75 uppercase lg:mx-auto',
);

const HeroEyebrow = () => (
  <ul className='flex justify-evenly'>
    <li className={liStyling}>Track</li>
    <DotSeparator renderAs='li' />
    <li className={liStyling}>Deduct</li>
    <DotSeparator renderAs='li' />
    <li className={liStyling}>Go further</li>
  </ul>
);

export default HeroEyebrow;
