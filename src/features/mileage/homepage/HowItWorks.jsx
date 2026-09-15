import driveImg from '../../../assets/drive.png';
import trackImg from '../../../assets/track.png';
import saveImg from '../../../assets/save.png';
import cn from '../../../utils/cn';

const HowItWorks = () => {
  const liStyling = cn('flex flex-col items-center pb-10');

  const imgStyling = cn(
    'mb-2 aspect-video w-[78%] rounded-xl border border-gray-300 shadow-sm lg:w-50',
  );

  const h3Styling = cn('text-color-subtle pb-1.5 text-2xl font-bold lg:pl-1');

  const pStyling = cn(
    'text-color-header-tertiary mb-1 w-[80%] text-center text-sm font-medium lg:max-w-55 lg:pl-1',
  );
  const aStyling = cn(
    'text-color-subtle ml-1 text-(length:--font-10px) tracking-tight transition-all duration-100 hover:text-gray-600',
  );

  return (
    // CONTAINER
    <div className='bg-color-bg flex w-full flex-col border-t-2 border-b-2 border-gray-400/20 pt-4 shadow-sm lg:h-65 lg:pl-11.25'>
      {/* SECTION HEADER */}
      <div className='flex flex-col pb-8 lg:w-125 lg:items-center'>
        <p className='text-color-subtle mx-auto text-(length:--font-11px) font-light uppercase lg:pl-1 lg:font-medium lg:tracking-wider'>
          Make more on every mile
        </p>

        <div className='mx-[10%] flex justify-center gap-[7%] pb-1 text-[clamp(var(--font-28px),calc(0.537rem+5.39vw),var(--font-50px))] font-bold text-gray-700 lg:gap-5 lg:text-(length:--font-50px) lg:tracking-wide'>
          <h2>Drive.</h2>
          <h2>Track.</h2>
          <h2>Save.</h2>
        </div>

        <p className='text-color-subtle text-balanced mx-auto flex w-[80%] text-center text-sm font-medium tracking-wide'>
          Whether you're a freelancer, contractor, or business owner,
          MileMetrics helps you keep accurate mileage records and maximize what
          you earn.
        </p>
      </div>

      {/* SUB-HEADERS */}
      <ul className='flex flex-col pl-1 lg:ml-auto lg:w-full lg:justify-evenly lg:gap-20'>
        {/* DRIVE */}
        <li className={liStyling}>
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
        <li className={liStyling}>
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
        <li className={liStyling}>
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
