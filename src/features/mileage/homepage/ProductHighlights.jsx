import {
  Car,
  ChartNoAxesCombined,
  NotebookText,
  ShieldCheck,
} from 'lucide-react';
import cn from '../../../utils/cn';

const ProductHighlights = () => {
  const ulStyling = cn('flex gap-10 pt-1 pl-10');
  const liStyling = cn('flex w-50 flex-col');
  const svgStyling = cn(
    'mb-2.25 w-fit rounded-md bg-emerald-200/45 p-1.25 text-green-700',
  );
  const svgSize = 27;
  const h3Styling = cn(
    'pb-0.5 text-[0.9375rem] font-medium tracking-tight text-gray-600',
  );
  const pStyling = cn('text-[0.8125rem] font-medium text-pretty text-gray-500');

  return (
    <ul className={ulStyling}>
      <li className={liStyling}>
        <div className={svgStyling}>
          <Car size={svgSize} />
        </div>
        <h3 className={h3Styling}>Track with Ease</h3>
        <p className={pStyling}>Log your miles in seconds from any device</p>
      </li>

      <li className={liStyling}>
        <div className={svgStyling}>
          <ChartNoAxesCombined size={svgSize} />
        </div>
        <h3 className={h3Styling}>Get Clear Insights</h3>
        <p className={pStyling}>
          See your driving history and total deductions
        </p>
      </li>

      <li className={liStyling}>
        <div className={svgStyling}>
          <NotebookText size={svgSize} />
        </div>
        <h3 className={h3Styling}>Stay Tax Ready</h3>
        <p className={pStyling}>
          Export clean IRS-ready reports <em>anytime</em>
        </p>
      </li>

      <li className={liStyling}>
        <div className={svgStyling}>
          <ShieldCheck size={svgSize} />
        </div>
        <h3 className={h3Styling}>Your Data - Secured</h3>
        <p className={pStyling}>
          Powered by <em>Supabase</em> and modern security
        </p>
      </li>
    </ul>
  );
};

export default ProductHighlights;
