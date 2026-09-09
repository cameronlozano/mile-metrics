import { Link } from 'react-router';

const Header = () => {
  return (
    <div className='w-full'>
      <div className='flex items-center justify-center gap-10 pb-10'>
        <div>
          <h1 className='text-7xl font-bold text-gray-700'>MileMetrics</h1>

          <p className='font-medium tracking-tighter text-gray-500/60'>
            Gives users a simple way to manage mileage
          </p>
        </div>

        <Link to={'/signup'}>
          <div className='flex h-40 w-150 cursor-pointer flex-col items-center justify-center gap-0.75 bg-emerald-500/90 text-white transition-all duration-100 hover:bg-emerald-500'>
            <h3 className='items-center text-5xl font-bold'>
              Get started today
            </h3>
            <p className='font-semibold tracking-tight'>
              Create your account to save records, track miles, and simplify tax
              time.
            </p>
          </div>
        </Link>
      </div>

      <div className='flex items-center justify-center gap-10'>
        <Link to={'/add-miles'}>
          <div className='flex h-40 w-150 cursor-pointer flex-col items-center justify-center gap-0.75 bg-emerald-500/90 text-white transition-all duration-100 hover:bg-emerald-500'>
            <h3 className='items-center text-5xl font-bold'>Record mileage</h3>

            <p className='font-semibold tracking-tight'>
              Add mileage records efficiently with minimum effort
            </p>
          </div>
        </Link>

        <div>
          <h1 className='text-7xl font-bold text-gray-700'>MileMetrics</h1>
          <p className='font-medium tracking-tighter text-gray-500/60'>
            Makes mile entry quick and reliable
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
