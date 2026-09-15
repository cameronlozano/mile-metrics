import {
  Car,
  ChartNoAxesCombined,
  NotebookText,
  ShieldCheck,
} from 'lucide-react';
import cn from '../../../utils/cn';

const ProductHighlights = () => {
  const ulStyling = cn(
    'flex w-full flex-col items-start lg:gap-10 lg:pt-1 lg:pl-10',
  );

  const liStyling = cn('flex items-center gap-3 pb-10 pl-5 lg:w-50');

  const svgStyling = cn(
    'items- mb-4 mb-auto w-fit rounded-md bg-emerald-200/45 p-1.25 text-green-700 lg:mx-auto lg:mb-2.25',
  );

  const svgSize = 27;

  const divStyling = cn('flex flex-col gap-2');

  const h3Styling = cn(
    'lg:text-15px text-color-header-primary w-30 pt-1 text-sm font-medium tracking-tight lg:mx-auto lg:pb-0.5 lg:pb-2',
  );
  const pStyling = cn(
    'text-color-subtle lg:text-color-subtle mx-auto w-40 text-xs font-medium text-pretty',
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
          <Svg className={svgStyling} size={svgSize} />

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
