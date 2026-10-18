import { Link } from 'react-router';
import Button from '../../../ui/Button';
import { ArrowRight, MoveRight } from 'lucide-react';
import cn from '../../../utils/cn';

const HeroActions = () => {
  // #region CONTAINER STYLING
  const container = cn('flex items-center gap-2');
  const secondaryContainer = cn('flex gap-1');
  // #endregion

  // #region Get started stylings
  const buttonStyling = cn(
    'group border-border-brand bg-bg-filled relative flex items-center justify-center gap-0.5 rounded-full border px-1 py-1 shadow-sm',
  );

  const pStyling = cn(
    'text-text-on-color text-[8px] leading-tight font-medium tracking-tight text-nowrap',
  );

  const svgStyling = cn('text-text-on-color size-2');
  // #endregion

  // #region Sign in stylings
  const linkStyling = cn(
    'text-text-subtitle group decoration-text-subtitle flex items-center gap-1 text-[8px] underline',
  );

  const signInIconStyling = cn(
    'text-text-subtitle size-2.5 translate-y-px transition-all duration-125',
  );

  // #endregion

  return (
    <div className={container}>
      {/* Get started button */}

      <Button
        renderAs={Link}

        to='/login'
        variant='submit'
        className={buttonStyling}
      >
        <p className={pStyling}>Get Started</p>
        <ArrowRight aria-hidden='true' className={svgStyling} />
      </Button>

      {/* Sign in */}
      <div className={secondaryContainer}>
        <Link to='/login' className={linkStyling}>
          Sign in
        </Link>

        <MoveRight className={signInIconStyling} />
      </div>
    </div>
  );
};

export default HeroActions;
