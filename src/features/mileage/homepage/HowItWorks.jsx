import driveImg from '../../../assets/drive.png';
import trackImg from '../../../assets/track.png';
import saveImg from '../../../assets/save.png';
import cn from '../../../utils/cn';

const HowItWorks = () => {
  const liStyling = cn('flex items-start pb-10');

  const imgStyling = cn(
    'mb-1.5 aspect-video w-32 rounded-xl border border-gray-300 shadow-sm lg:w-50',
  );

  const divStyling = cn('mx-auto flex flex-col pl-1.5');

  const h3Styling = cn('text-color-subtle pb-1 font-bold lg:pl-1');

  const pStyling = cn(
    'text-color-header-tertiary mb-1 w-40 text-xs font-medium lg:max-w-55 lg:pl-1',
  );
  const aStyling = cn(
    'text-color-subtle ml-1 text-(length:--font-10px) tracking-tight transition-all duration-100 hover:text-gray-600',
  );

  return (
    <div className='bg-color-bg flex h-160 flex-col border-t-2 border-b-2 border-gray-400/20 py-4 shadow-sm lg:h-65 lg:pl-11.25'>
      <div className='flex flex-col justify-center pb-10 lg:w-125 lg:items-center'>
        <p className='text-color-subtle mx-auto pb-0.5 text-(length:--font-11px) tracking-wider uppercase lg:pl-1 lg:font-medium'>
          Make more on every mile
        </p>

        <div className='flex justify-evenly pb-2 text-(length:--font-28px) font-bold tracking-wide text-gray-700 lg:gap-5 lg:text-(length:--font-50px)'>
          <h2>Drive.</h2>
          <h2>Track.</h2>
          <h2>Save.</h2>
        </div>

        <p className='text-color-subtle mx-auto flex w-60 text-center text-(length:--font-15px) font-medium tracking-tight text-balance'>
          Whether you're a freelancer, contractor, or business owner,
          MileMetrics helps you keep accurate mileage records and maximize what
          you earn.
        </p>
      </div>

      {/* SUB HEADERS WITH PHOTOS */}
      <ul className='flex flex-col pl-1 lg:ml-auto lg:w-full lg:justify-evenly lg:gap-20'>
        {/* DRIVE */}
        <li className={liStyling}>
          <img className={imgStyling} src={driveImg} />

          <div className={divStyling}>
            <h3 className={h3Styling}>Drive</h3>
            <p className={pStyling}>
              Nearly 12 million U.S. workers were independent contractors in
              2023
            </p>
            <a
              href='https://www.bls.gov/news.release/conemp.htm'
              className={aStyling}
              target='_blank'
              rel='noopener noreferrer'
            >
              source
            </a>
          </div>
        </li>

        {/* Track */}
        <li className={liStyling}>
          <img className={imgStyling} src={trackImg} />

          <div className={divStyling}>
            <h3 className={h3Styling}>Track</h3>

            <p className={pStyling}>
              47% of surveyed gig workers were unaware of tax deductions
              available to them
            </p>
            <a
              href='https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2784243'
              className={aStyling}
              target='_blank'
              rel='noopener noreferrer'
            >
              source
            </a>
          </div>
        </li>

        {/* Save */}
        <li className={liStyling}>
          <img className={imgStyling} src={saveImg} />

          <div className={divStyling}>
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
          </div>
        </li>
      </ul>
    </div>
  );
};

export default HowItWorks;
