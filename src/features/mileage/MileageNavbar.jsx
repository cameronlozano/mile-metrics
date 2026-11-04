import Cluster from '../../ui/layout/Cluster';
import Box from '../../ui/layout/Box';

import { NavLink } from 'react-router';
import cn from '../../utils/cn';

import logo from '../../assets/mileMetricsLogo.png';

export default function Navbar() {
  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/login', label: 'Login' },
    { to: '/add-miles', label: 'Add Miles' },
    { to: '/view-miles', label: 'View Miles' },
  ];

  // #region Stylings

  const sharedStyles = (isActive) =>
    cn(
      `focus-visible:ring-focus-color-default outline-none focus-visible:rounded-xs focus-visible:ring-2`,
    );

  const svgStyles = cn('h-[clamp(12px,_3.2px_+_2.75vw,_56px)]');

  const linkStyles = cn(
    'text-text-brand text-[clamp(6px,2.4px_+_1.125vw,24px)] font-semibold tracking-tight',
  );
  // #endregion stylings

  return (
    <Box
      border='border-b border-border-muted'
      padding={cn('px-[1vw_2vw]', 'py-[0.5vw]')}
    >
      <Cluster>
        {/* LOGO */}
        <NavLink className={({ isActive }) => sharedStyles(isActive)} to='/'>
          <img src={logo} alt='MileMetrics' className={svgStyles} />
        </NavLink>

        <Cluster gap='gap-[4vw]' className='ml-auto'>
          {navLinks.map(({ to, label }) => (
            <NavLink key={label} to={to} className={linkStyles}>
              {label}
            </NavLink>
          ))}
        </Cluster>
      </Cluster>
    </Box>
  );
}
