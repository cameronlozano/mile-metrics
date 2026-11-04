import Box from '../../../ui/layout/Box';
import Stack from '../../../ui/layout/Stack';
import cn from '../../../utils/cn';
import HeroActions from './HeroActions';

const Header = () => {
  const titleStyling = cn(
    'text-text-heading text-[clamp(1rem,-0.9231rem_+_7.6923vw,6rem)] leading-tight font-bold',
  );

  const subtitleStyling = cn(
    'text-text-subtitle text-[clamp(0.5rem,-0.1731rem_+_2.6923vw,2.25rem)] font-medium tracking-tighter',
  );

  const descriptionStyling = cn(
    'text-text-subtitle w-[30ch] -translate-y-[clamp(0.1875rem,0.025rem_+_0.8125vw,1rem)] self-center text-[clamp(0.4375rem,-0.1731rem_+_2.6923vw,2.25rem)] text-balance',
  );

  return (
    <Box height='h-full' padding='p-[2vw]'>
      <div className='grid h-full grid-rows-[auto_1fr_auto]'>
        <div>
          <h1 className={titleStyling}>MileMetrics</h1>

          <p className={subtitleStyling}>The smarter way to track every mile</p>
        </div>

        <p className={descriptionStyling}>
          A platform for gig-workers to track miles and manage tax reports.
        </p>

        <div>
          <HeroActions />
        </div>
      </div>
    </Box>
  );
};

export default Header;
