import { Link } from 'react-router';
import Button from '../../../ui/Button';
import { ArrowRight, MoveRight } from 'lucide-react';

const HeroActions = () => {
  return (
    <div className='flex flex-col lg:w-90 lg:items-center'>
      <div className='flex items-center justify-evenly lg:gap-7'>
        {/* Get started button */}
        <Button
          renderAs={Link}
          to='/login'
          variant='submit'
          className='group relative flex w-35 text-sm lg:ml-15 lg:w-43'
        >
          <p className='text-nowrap lg:pl-5'>
            Get Started
            <span className='absolute top-1/2 right-3.5 -translate-y-1/2 transition-transform duration-100 group-hover:translate-x-1.5 lg:right-4'>
              {<ArrowRight aria-hidden='true' size={20} />}
            </span>
          </p>
        </Button>

        {/* Sign in */}
        <div>
          <Link
            to='/login'
            className='text-color-subtle group relative flex gap-2 tracking-tight lg:text-lg lg:font-medium'
          >
            Sign in
            <MoveRight className='text-color-subtle transition-all duration-125 lg:absolute lg:top-1/2 lg:left-16.5 lg:-translate-y-2.75 lg:group-hover:translate-x-2' />
          </Link>
        </div>
      </div>

      {/* Feel free to try */}
      <div className='text-color-subtle flex items-center pt-3.25 pl-10.5 text-xs font-light tracking-tight lg:gap-5 lg:pr-5'>
        <p>Completely free to use</p>
      </div>
    </div>
  );
};

export default HeroActions;
