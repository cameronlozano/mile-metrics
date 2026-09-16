import { NavLink } from 'react-router';
import logo from '../../assets/mileMetricsLogo.png';
import cn from '../../utils/cn';

export default function Navbar() {
  const navLinkStyling = (isActive) =>
    cn(
      `text-color-header-tertiary relative flex rounded-sm font-medium tracking-tight outline-none after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-center after:translate-y-1 after:scale-x-0 after:bg-emerald-500 after:transition-transform after:duration-150 focus-visible:ring-3 focus-visible:ring-emerald-500 focus-visible:ring-offset-slate-100`,

      isActive && 'after:scale-x-100',
    );

  return (
    <div className='z-50 flex h-13 items-center justify-between px-1.5 text-(length:--font-10px) lg:px-3'>
      {/* LOGO */}
      <NavLink className={({ isActive }) => navLinkStyling(isActive)} to='/'>
        <img src={logo} alt='MileMetrics' className='h-6 lg:h-6.5' />
      </NavLink>

      {/* LOGIN */}
      <div className='flex w-60 items-end justify-end gap-4.25 pt-1.25 pr-1 lg:ml-auto lg:gap-8 lg:pr-9'>
        <NavLink
          className={({ isActive }) => cn(navLinkStyling(isActive), 'lg:p-0.5')}
          to={'/login'}
        >
          Login
        </NavLink>

        {/* ADD MILES */}
        <NavLink
          className={({ isActive }) => cn(navLinkStyling(isActive), 'lg:p-0.5')}
          to={'/add-miles'}
        >
          Add Miles
        </NavLink>

        {/* VIEW MILES */}
        <NavLink
          className={({ isActive }) => cn(navLinkStyling(isActive), 'lg:p-0.5')}
          to={'view-miles'}
        >
          View miles
        </NavLink>
      </div>
    </div>
  );
}
