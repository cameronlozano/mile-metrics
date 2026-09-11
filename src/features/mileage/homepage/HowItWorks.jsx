import driveImg from '../../../assets/drive.png';
import trackImg from '../../../assets/track.png';
import saveImg from '../../../assets/save.png';
import cn from '../../../utils/cn';

const HowItWorks = () => {
  const imgStyling = cn(
    'mb-1.5 aspect-video w-50 rounded-xl border border-gray-300 shadow-sm',
  );
  const h3Styling = cn('text pb-1.25 pl-1 font-bold text-slate-500');
  const pStyling = cn(
    'mb-1 max-w-55 pl-1 text-sm font-medium text-gray-500/75',
  );
  const aStyling = cn(
    'ml-1 text-[0.625rem] tracking-tight text-gray-500 transition-all duration-100 hover:text-gray-600',
  );

  return (
    <div className='flex h-65 border-t-2 border-b-2 border-gray-400/20 bg-[#F9FAFB] py-4 pl-11.25 shadow-sm'>
      <div className='w-125 pb-3'>
        <p className='pl-1 text-xs font-medium tracking-wider text-gray-600/50 uppercase'>
          Make more on every mile
        </p>

        <div className='flex gap-5 pb-3 text-[3.125rem] font-bold tracking-wide text-gray-700'>
          <h2>Drive.</h2>
          <h2>Track.</h2>
          <h2>Save.</h2>
        </div>

        <p className='text-[0.9375rem] font-medium text-gray-600/65'>
          Whether you're a freelancer, contractor, or business owner,
          MileMetrics helps you keep accurate mileage records and maximize what
          you earn.
        </p>
      </div>

      <ul className='ml-auto flex w-full justify-evenly gap-20'>
        {/* DRIVE */}
        <li>
          <img className={imgStyling} src={driveImg} />
          <h3 className={h3Styling}>Drive</h3>
          <p className={pStyling}>
            Nearly 12 million U.S. workers were independent contractors in 2023
          </p>
          <a
            href='https://www.bls.gov/news.release/conemp.htm'
            className={aStyling}
            target='_blank'
            rel='noopener noreferrer'
          >
            source
          </a>
        </li>
        {/* Track */}
        <li>
          <img className={imgStyling} src={trackImg} />
          <h3 className={h3Styling}>Track</h3>

          <p className={pStyling}>
            47% of surveyed gig workers were unaware of tax deductions available
            to them
          </p>
          <a
            href='https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2784243'
            className={aStyling}
            target='_blank'
            rel='noopener noreferrer'
          >
            source
          </a>
        </li>
        {/* Save */}
        <li>
          <img className={imgStyling} src={saveImg} />
          <h3 className={h3Styling}>Save</h3>

          <p className={pStyling}>
            10,000 qualifying business miles can represent a $7,600 deduction
          </p>
          <a
            href='https://www.irs.gov/tax-professionals/standard-mileage-rates'
            className={aStyling}
            target='_blank'
            rel='noopener noreferrer'
          >
            source
          </a>
        </li>
      </ul>
    </div>
  );
};

export default HowItWorks;
