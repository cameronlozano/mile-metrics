/* eslint-disable no-unused-vars */
import cn from '../../../utils/cn';
import Center from '../../../ui/layout/Center';
import Stack from '../../../ui/layout/Stack';
import Cluster from '../../../ui/layout/Cluster';

import {
  Car,
  ChartNoAxesCombined,
  NotebookText,
  ShieldCheck,
} from 'lucide-react';
import Box from '../../../ui/layout/Box';

const ProductHighlights = () => {
  // #region styles

  const iconStyling = cn(
    'text-svg-brand-muted bg-bg-brand border-border-brand-muted p-space-2xs size-12 rounded-sm border',
  );

  const h3Styling = cn('text-text-heading text-center text-2xl font-bold');

  const pStyling = cn(
    'text-text-subtitle text-md w-[25ch] text-center font-medium tracking-tight text-balance',
  );
  // #endregion

  const listItems = [
    {
      icon: Car,
      title: 'Fast Tracking',
      description: 'Log your miles in seconds from any device',
    },
    {
      icon: ChartNoAxesCombined,
      title: 'Trip Analytics',
      description: 'See your driving history and total deductions',
    },
    {
      icon: NotebookText,
      title: 'Tax Support',
      description: 'Export IRS-ready reports easily, quickly',
    },
    {
      icon: ShieldCheck,
      title: 'Advanced Security',
      description: 'Powered by Supabase & modern best practices',
    },
  ];

  return (
    <>
      <h2 className={cn('sr-only')}>Product Highlights</h2>

      <Box padding='px-page-offset-sides-xs' margin='mb-space-2xs'>
        <Cluster
          renderAs='ul'
          justify='justify-center'
          gap='gap-x-space-md gap-y-space-2xl'
        >
          {listItems.map(({ title, icon: Svg, description }) => (
            //
            // Card structure ⬇️
            <Stack
              key={title}
              renderAs={'li'}
              className='grow'

              alignment='items-center'
              spacing='space-y-space-xs'
            >
              <Svg className={iconStyling} />

              <h3 className={h3Styling}>{title}</h3>

              <p className={pStyling}>{description}</p>
            </Stack>
          ))}
        </Cluster>
      </Box>
    </>
  );
};

export default ProductHighlights;
