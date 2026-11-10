import { Link } from 'react-router';
import Button from '../../../ui/Button';
import { ArrowRight, MoveRight } from 'lucide-react';
import cn from '../../../utils/cn';
import Stack from '../../../ui/layout/Stack';
import Center from '../../../ui/layout/Center';
import Box from '../../../ui/layout/Box';

const HeroActions = () => {
  // #region Get started stylings
  const buttonStyling = cn(
    'group border-border-brand bg-bg-filled gap-space-2xs relative flex items-center justify-center rounded-full border px-[0.75em] py-[0.35em] shadow-sm',
  );

  const getStartedLinkStyling = cn(
    'text-text-on-color text-2xl leading-tight font-medium tracking-tight text-nowrap',
  );

  const iconStyles = cn('text-text-on-color size-[1.25em]');
  // #endregion

  // #region Sign in stylings
  const signInLinkStyling = cn(
    'text-text-subtitle group decoration-text-subtitle gap-space-2xs flex items-center text-2xl underline',
  );

  const signInIconStyles = cn(
    'text-text-subtitle size-[1em] translate-y-px transition-all duration-125',
  );

  // #endregion

  return (
    <Box padding='pt-space-xs '>
      <Stack spacing='space-y-space-xl'>
        <p className='text-text-subtitle mx-auto w-[35ch] text-center text-lg text-pretty'>
          A platform for gig-workers to track miles and manage tax reports
        </p>

        <Center className='flex gap-[10vw]'>
          {/* Get started button */}
          <Button
            renderAs={Link}

            to='/login'
            variant='submit'
            className={buttonStyling}
          >
            <p className={getStartedLinkStyling}>Get Started</p>
            <ArrowRight aria-hidden='true' className={iconStyles} />
          </Button>

          {/* Sign in */}
          <div className='gap-space-2xs flex items-center'>
            <Link to='/login' className={signInLinkStyling}>
              Sign in
              <span>
                <MoveRight className={signInIconStyles} />
              </span>
            </Link>
          </div>
        </Center>
      </Stack>
    </Box>
  );
};

export default HeroActions;
