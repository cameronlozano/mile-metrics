/* eslint-disable no-unused-vars */

import {
  Car,
  ChartNoAxesCombined,
  NotebookText,
  ShieldCheck,
} from 'lucide-react';

import cn from '../../../utils/cn';

const ProductHighlights = () => {
  // #region Container styles
  const containerStyles = cn('gap-x-space-md gap-y-space-xs grid grid-cols-2');

  const listItemContainerStyles = cn(
    'flex w-22 flex-col items-center gap-2 rounded-sm py-3 odd:justify-self-end even:justify-self-start',
  );

  const textContainerStyles = cn('flex flex-col items-center gap-1');
  //  #endregion

  // #region List item styles
  const iconStyling = cn(
    'text-svg-brand-muted bg-bg-brand border-border-brand-muted size-5.25 rounded-sm border p-1',
  );

  const h3Styling = cn('text-text-heading text-center text-[8px] font-bold');

  const pStyling = cn(
    'text-text-subtitle w-[95%] text-center text-[6px] leading-2 font-medium tracking-tight text-balance',
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

      <ul className={containerStyles}>
        {listItems.map(({ title, icon: Svg, description }, index) => (
          <li className={listItemContainerStyles} key={title}>
            <Svg className={iconStyling} />

            <div className={textContainerStyles}>
              <h3 className={h3Styling}>{title}</h3>
              <p className={pStyling}>{description}</p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ProductHighlights;
