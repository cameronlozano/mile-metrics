import { Link } from 'react-router';
import Button from '../../../ui/Button';
import { ArrowRight, MoveRight } from 'lucide-react';

const HeroActions = () => {
  return (
    <div className='flex flex-col lg:w-90 lg:items-center'>
      <div className='xs:justify-evenly flex items-center justify-evenly pb-1.5 lg:gap-7'>
        {/* Get started button */}
        <Button
          renderAs={Link}
          to='/login'
          variant='submit'
          className='group xs:py-2 xs:w-25 relative flex w-35 text-sm'
        >
          <p className='xs:text-(length:--font-10px) text-nowrap lg:pl-5'>
            Get Started
            <span className='xs:right-1 absolute top-1/2 right-3.5 -translate-y-1/2 transition-transform duration-100 group-hover:translate-x-1.5 lg:right-4'>
              {<ArrowRight aria-hidden='true' className='xs:size-4 size-5' />}
            </span>
          </p>

          {/* Completely free to use */}
          <p className='text-color-subtle xs:text-(length:--font-8px) xs:-bottom-4.25 absolute -bottom-6.5 left-2.25 text-xs font-light tracking-tight'>
            Completely free to use
          </p>
        </Button>

        {/* Sign in */}
        <div className=''>
          <Link
            to='/login'
            className='text-color-subtle group xs:text-sm flex items-center gap-2 tracking-tight'
          >
            Sign in
            <MoveRight className='text-color-subtle transition-all duration-125' />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroActions;
