import { Link } from 'react-router';

import Box from '../../ui/layout/Box';
import Cluster from '../../ui/layout/Cluster';

import logo from '../../assets/mileMetricsLogo.png';
import cn from '../../utils/cn';
import NavigationMenu from '../../ui/NavigationMenu';
import { ChevronDown } from 'lucide-react';

export default function Navbar() {
  const navigationMenuProps = {
    triggerIcon: <ChevronDown size='1.25em' />,

    links: [
      { label: 'Home', to: '/' },

      {
        triggerLabel: 'Account',

        links: [
          {
            label: 'Login',
            to: '/login',
          },
          {
            label: 'Register',
            to: '/register',
          },
        ],
      },

      {
        triggerLabel: 'Miles',

        links: [
          { label: 'Add Miles', to: '/add-miles' },
          { label: 'View Miles', to: '/view-miles' },
        ],
      },
    ],

    closeLinkOnClick: true,

    renderLinkAs: <Link />,

    positionerProps: {
      sideOffset: 11,
    },

    classNames: {
      list: cn('flex gap-[5vw]'),

      triggerLabel: cn('flex items-center gap-[0.5vw]'),

      content: cn(
        'bg-bg-alt text-text-brand flex flex-col gap-[4vw] rounded-md px-[3.5vw] py-[3vw] text-lg font-medium shadow-md',
      ),
    },
  };

  // #region Stylings

  const logoStyles = cn('h-10');

  // eslint-disable-next-line no-unused-vars
  const interactionStyles = () =>
    cn(
      `focus-visible:ring-focus-color-default outline-none focus-visible:rounded-xs focus-visible:ring-2`,
    );

  // #endregion stylings

  return (
    <Box
      border='border-b border-border-muted'
      padding={cn('px-[1vw_2vw]', 'py-[0.5vw]')}
    >
      <Cluster>
        {/* LOGO */}
        <Link className={({ isActive }) => isActive} to='/'>
          <img src={logo} alt='MileMetrics' className={logoStyles} />
        </Link>

        <div className='pr-space-xs ml-auto'>
          <NavigationMenu {...navigationMenuProps} />
        </div>
      </Cluster>
    </Box>
  );
}
