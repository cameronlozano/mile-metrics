import {
  Car,
  ChartNoAxesCombined,
  NotebookText,
  ShieldCheck,
} from 'lucide-react';
import cn from '../../../utils/cn';

const ProductHighlights = () => {
  const ulStyling = cn(
    'xs:grid xs:grid-cols-2 flex w-full flex-col items-start',
  );

  const liStyling = cn(
    'xs:flex-col xs:gap-1.5 xs:pl-0 flex items-center gap-3 pb-10 pl-5',
  );

  const svgStyling = cn(
    'xs:size-6 xs:mx-auto mb-4 mb-auto w-fit rounded-md bg-emerald-200/45 p-1.25 text-green-700 lg:mx-auto lg:mb-2.25',
  );

  const divStyling = cn('flex flex-col gap-2');

  const h3Styling = cn(
    'text-color-header-primary xs:mx-auto xs:text-center xs:text-xs xs:text-color-header-secondary w-30 pt-1 text-sm font-medium tracking-tight',
  );
  const pStyling = cn(
    'text-color-subtle lg:text-color-subtle xs:text-center xs:flex xs:font-light mx-auto w-40 text-xs font-medium text-pretty',
  );

  const features = [
    {
      icon: Car,
      title: 'Track with Ease',
      description: 'Log your miles in seconds from any device',
    },
    {
      icon: ChartNoAxesCombined,
      title: 'Get Clear Insights',
      description: 'See your driving history and total deductions',
    },
    {
      icon: NotebookText,
      title: 'Stay Tax Ready',
      description: 'Export clean IRS-ready reports anytime',
    },
    {
      icon: ShieldCheck,
      title: 'Your Data - Secured',
      description: 'Powered by Supabase and modern security',
    },
  ];

  return (
    <ul className={ulStyling}>
      {features.map(({ title, icon: Svg, description }) => (
        <li className={liStyling} key={title}>
          <Svg className={svgStyling} />

          <div className={divStyling}>
            <h3 className={h3Styling}>{title}</h3>
            <p className={pStyling}>{description}</p>
          </div>
        </li>
      ))}
    </ul>
  );

  // return (
  //   <ul className={ulStyling}>
  //     <li className={liStyling}>
  //       <div className={divStyling}>
  //         <Car className={svgStyling} size={svgSize} />
  //       </div>
  //       <h3 className={h3Styling}>Track with Ease</h3>
  //       <p className={pStyling}>Log your miles in seconds from any device</p>
  //     </li>

  //     <li className={liStyling}>
  //       <div className={svgStyling}>
  //         <ChartNoAxesCombined size={svgSize} />
  //       </div>
  //       <h3 className={h3Styling}>Get Clear Insights</h3>
  //       <p className={pStyling}>
  //         See your driving history and total deductions
  //       </p>
  //     </li>

  //     <li className={liStyling}>
  //       <div className={svgStyling}>
  //         <NotebookText size={svgSize} />
  //       </div>
  //       <h3 className={h3Styling}>Stay Tax Ready</h3>
  //       <p className={pStyling}>
  //         Export clean IRS-ready reports <em>anytime</em>
  //       </p>
  //     </li>

  //     <li className={liStyling}>
  //       <div className={svgStyling}>
  //         <ShieldCheck size={svgSize} />
  //       </div>
  //       <h3 className={h3Styling}>Your Data - Secured</h3>
  //       <p className={pStyling}>
  //         Powered by <em>Supabase</em> and modern security
  //       </p>
  //     </li>
  //   </ul>
  // );
};

export default ProductHighlights;
