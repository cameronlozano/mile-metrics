import driveImg from '../../../assets/drive.png';

import trackImg from '../../../assets/track.png';

import saveImg from '../../../assets/save.png';

import cn from '../../../utils/cn';

const howItWorksItems = [
  {
    title: 'Drive',
    img: driveImg,
    description:
      'Nearly 12 million U.S. workers were independent contractors in 2023',
    source: 'https://www.bls.gov/news.release/conemp.htm',
  },
  {
    title: 'Track',
    img: trackImg,
    description:
      '47% of surveyed gig workers were unaware of tax deductions available to them',
    source: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2784243',
  },
  {
    title: 'Save',
    img: saveImg,
    description:
      '10,000 qualifying business miles can represent a $7,600 deduction',
    source: 'https://www.irs.gov/tax-professionals/standard-mileage-rates',
  },
];

const HowItWorks = () => {
  const liStyling = cn('xs:flex-1 flex flex-col items-center pb-10');

  const imgStyling = cn(
    'xs:w-[70%] mb-2 aspect-video w-[78%] rounded-xl border border-gray-300 shadow-sm',
  );

  const h3Styling = cn(
    'text-color-subtle xs:text-[clamp(1.25rem,calc(0.802rem+1.935vw),3.125rem)] pb-1.5 text-2xl font-bold',
  );

  const pStyling = cn(
    'text-color-header-tertiary xs:text-center xs:w-[80&] xs:text-[clamp(0.625rem,calc(0.401rem+0.968vw),1.5625rem)] mb-1 w-[80%] text-center text-sm font-medium',
  );

  const aStyling = cn(
    'text-color-subtle xs: xs:text-(length:--font-8px) ml-1 text-(length:--font-10px) tracking-tight transition-all duration-100 hover:text-gray-600',
  );

  return (
    // CONTAINER
    <div className='bg-color-bg flex w-full flex-col border-t-2 border-b-2 border-gray-400/20 pt-4 shadow-sm'>
      {/* SECTION HEADER */}
      <div className='xs:pb-3 flex w-full flex-col pb-8'>
        <p className='text-color-subtle mx-auto text-(length:--font-8px) font-light uppercase lg:pl-1 lg:font-medium lg:tracking-wider'>
          Make more on every mile
        </p>

        <div className='text-color-header-secondary mx-[10%] flex gap-[7%] pb-1 text-[clamp(var(--font-28px),calc(1.049rem+3.032vw),var(--font-75px))] font-bold lg:mx-0 lg:justify-evenly lg:gap-0'>
          <h2>Drive.</h2>
          <h2>Track.</h2>
          <h2>Save.</h2>
        </div>

        <p className='text-color-subtle text-balanced xs:text-center xs:w-[90%] xs:tracking-wider mx-auto flex w-[83%] text-center text-[clamp(0.625rem,calc(0.35rem+1.375vw),2rem)] font-medium tracking-wide'>
          Freelancers, contractors and business owners, MileMetrics helps you
          keep accurate mileage records and maximize what you earn.
        </p>
      </div>

      {/* SUB-HEADERS */}
      <ul className='xs:flex-row xs:ml-0 flex flex-col pl-1'>
        {howItWorksItems.map(({ title, img, description, source }) => (
          <li key={title} className={liStyling}>
            <img className={imgStyling} src={img} alt='' />

            <h3 className={h3Styling}>{title}</h3>

            <p className={pStyling}>{description}</p>

            <a
              href={source}
              className={aStyling}
              target='_blank'
              rel='noopener noreferrer'
            >
              source
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HowItWorks;
