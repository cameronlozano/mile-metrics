import { Link } from 'react-router';
import Button from '../../../ui/Button';
import { ArrowRight, MoveRight } from 'lucide-react';
import cn from '../../../utils/cn';
import Stack from '../../../ui/layout/Stack';

const HeroActions = () => {
  // #region Get started stylings
  const buttonStyling = cn(
    'group border-border-brand bg-bg-filled gap-space-2xs relative flex items-center justify-center rounded-full border px-[0.5em] py-[0.3em] text-[clamp(0.5rem,0.0116rem_+_2.1705vw,2.25rem)] shadow-sm',
  );

  const pStyling = cn(
    'text-text-on-color leading-tight font-medium tracking-tight text-nowrap',
  );

  const iconStyles = cn('text-text-on-color size-[0.8em]');
  // #endregion

  // #region Sign in stylings
  const linkStyling = cn(
    'text-text-subtitle group decoration-text-subtitle gap-space-2xs flex items-center text-[clamp(0.4375rem,0.0375rem_+_2vw,2.4375rem)] underline',
  );

  const signInIconStyling = cn(
    'text-text-subtitle size-[1em] translate-y-px transition-all duration-125',
  );

  // #endregion

  return (
    <div className='flex items-center gap-[2.5vw]'>
      {/* Get started button */}

      <Button
        renderAs={Link}

        to='/login'
        variant='submit'
        className={buttonStyling}
      >
        <p className={pStyling}>Get Started</p>
        <ArrowRight aria-hidden='true' className={iconStyles} />
      </Button>

      {/* Sign in */}
      <div className='gap-space-2xs flex items-center'>
        <Link to='/login' className={linkStyling}>
          Sign in
          <span>
            <MoveRight className={signInIconStyling} />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default HeroActions;
