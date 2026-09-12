import { Link } from 'react-router';
import Button from '../../../ui/Button';
import { ArrowRight, MoveRight } from 'lucide-react';

const HeroActions = () => {
  return (
    <div className='flex w-90 flex-col items-center justify-center pl-1'>
      <div className='flex items-center gap-8'>
        {/* Get started button */}
        <Button variant='primary' className='group relative ml-15 flex w-43'>
          <p className='pl-5 text-nowrap'>
            Get Started
            <span className='absolute top-1/2 right-6 -translate-y-1/2 transition-transform duration-100 group-hover:translate-x-1.5'>
              {<ArrowRight aria-hidden='true' size={20} />}
            </span>
          </p>
        </Button>

        {/* Sign in */}
        <Link className='relative text-lg font-medium tracking-tight text-gray-500/80'>
          Sign in
          <MoveRight className='absolute top-1/2 left-16.25 -translate-y-2.75 text-gray-500/70' />
        </Link>
      </div>

      {/* Feel free to try */}
      <div className='flex items-center gap-5 pt-3.25 pr-5 text-xs text-gray-600/65'>
        <p>Completely free to use</p>
      </div>
    </div>
  );
};

export default HeroActions;
