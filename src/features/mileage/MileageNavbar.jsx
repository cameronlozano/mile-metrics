import { NavLink } from 'react-router';
import logo from '../../assets/mileMetricsLogo.png';
import cn from '../../utils/cn';

export default function Navbar() {
  const navLinkStyling = (isActive) =>
    cn(
      `text-color-header-tertiary absolute relative flex items-center rounded-xs font-medium tracking-tight outline-none after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-center after:translate-y-1 after:scale-x-0 after:bg-emerald-500 after:transition-transform after:duration-150 focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-3 focus-visible:ring-offset-gray-200`,

      isActive && 'after:scale-x-100',
    );

  return (
    // LOGO
    <div className='z-50 flex h-13 items-center justify-between gap-2 px-3 text-xs'>
      <div className='flex place-items-center'>
        <NavLink className={({ isActive }) => navLinkStyling(isActive)} to='/'>
          <img src={logo} alt='MileMetrics' className='h-8' />
        </NavLink>
      </div>

      <div className='ml-auto flex gap-9.25 pr-9'>
        {/* LOGIN */}
        <div>
          <NavLink
            className={({ isActive }) => cn(navLinkStyling(isActive))}
            to={'/login'}
          >
            Login
          </NavLink>
        </div>
        {/* ADD MILES */}
        <NavLink
          className={({ isActive }) => cn(navLinkStyling(isActive))}
          to={'/add-miles'}
        >
          Add Miles
        </NavLink>

        {/* VIEW MILES */}
        <NavLink
          className={({ isActive }) => cn(navLinkStyling(isActive))}
          to={'view-miles'}
        >
          View miles
        </NavLink>
      </div>
    </div>
  );
}
