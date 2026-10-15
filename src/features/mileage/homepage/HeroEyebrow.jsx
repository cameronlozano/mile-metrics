import cn from '../../../utils/cn';
import DotSeparator from '../../../ui/DotSeparator';

/* #region styles */
const listStyles = cn('flex items-start justify-evenly');

const listItemStyles = cn(
  'text-text-faint flex text-[6px] font-light uppercase',
);
/* #endregion */

const HeroEyebrow = () => (
  <ul className={listStyles}>
    <li className={listItemStyles}>Track</li>

    <DotSeparator className={listItemStyles} renderAs='li' />

    <li className={listItemStyles}>Deduct</li>

    <DotSeparator renderAs='li' className={listItemStyles} />

    <li className={listItemStyles}>Go further</li>
  </ul>
);

export default HeroEyebrow;
