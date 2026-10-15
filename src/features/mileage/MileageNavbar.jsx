import { NavLink } from 'react-router';
import logo from '../../assets/mileMetricsLogo.png';
import cn from '../../utils/cn';

export default function Navbar() {
  // #region Stylings
  const containerStyles = cn(
    'px-space-xs bg-bg-alt border-border-muted h-space-md z-50 flex items-center justify-between border-b shadow-xs',
  );
  const navLinksContainerStyles = cn(
    'gap-space-sm pr-space-2xs flex pt-0.75 leading-none',
  );

  const sharedStyles = (isActive) =>
    cn(
      `focus-visible:ring-focus-color-default outline-none focus-visible:rounded-xs focus-visible:ring-2`,
      // selectedIndicatorStyles,
      isActive && 'after:scale-x-100',
    );

  const selectedIndicatorStyles = cn(
    'after:bg-underline-default after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-center after:translate-y-1 after:scale-x-0 after:transition-transform after:duration-150',
  );

  const svgStyles = cn('h-space-sm');

  const textLinkStyles = cn(
    'text-text-brand text-[7px] font-semibold tracking-tight',
  );
  // #endregion stylings

  return (
    <div className={containerStyles}>
      {/* LOGO */}
      <NavLink className={({ isActive }) => sharedStyles(isActive)} to='/'>
        <img src={logo} alt='MileMetrics' className={svgStyles} />
      </NavLink>

      {/* LOGIN */}
      <div className={navLinksContainerStyles}>
        <NavLink
          className={({ isActive }) =>
            cn(sharedStyles(isActive), textLinkStyles)
          }
          to={'/login'}
        >
          Login
        </NavLink>

        {/* ADD MILES */}
        <NavLink
          className={({ isActive }) =>
            cn(sharedStyles(isActive), textLinkStyles)
          }
          to={'/add-miles'}
        >
          Add Miles
        </NavLink>

        {/* VIEW MILES */}
        <NavLink
          className={({ isActive }) =>
            cn(sharedStyles(isActive), textLinkStyles)
          }
          to={'view-miles'}
        >
          View miles
        </NavLink>
      </div>
    </div>
  );
}
