import driveImg from '../../../assets/drive.png';
import recordImg from '../../../assets/record.png';
import saveImg from '../../../assets/save.png';
import cn from '../../../utils/cn';

const steps = [
  {
    title: 'Drive',
    img: driveImg,
    description:
      'Nearly 12 million U.S. workers were independent contractors in 2023',
    source:
      '[https://www.bls.gov/news.release/conemp.htm](https://www.bls.gov/news.release/conemp.htm)',
  },
  {
    title: 'Track',
    img: recordImg,
    description:
      '47% of surveyed gig workers were unaware of tax deductions available to them',
    source:
      '[https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2784243](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2784243)',
  },
  {
    title: 'Save',
    img: saveImg,
    description:
      '10,000 qualifying business miles can represent a $7,600 deduction',
    source:
      '[https://www.irs.gov/tax-professionals/standard-mileage-rates](https://www.irs.gov/tax-professionals/standard-mileage-rates)',
  },
];

const HowItWorks = () => {
  const sectionStyles = cn(
    'bg-color-bg border-border-faint py-space-xs gap-space-md flex flex-col border-t border-b',
  );

  const eyebrowStyles = cn(
    'text-text-subtitle mx-auto text-[clamp(0.3125rem,calc(0.2125rem+0.5vw),0.8125rem)] font-light tracking-widest uppercase',
  );

  // #region Step styles
  const stepsListStyles = cn('gap-space-lg flex flex-col');

  const stepItemStyles = cn('grid grid-cols-2 items-center');

  const stepContentStyles = cn('gap-y-space-2xs flex flex-col text-center');

  const stepImageStyles = cn(
    'border-border-moderate mr-space-xs ml-auto aspect-video w-[90%] rounded-md border shadow-sm',
  );

  const stepHeadingStyles = cn('text-text-heading font-bold');

  const stepDescriptionStyles = cn(
    'text-text-subtitle mx-auto w-[75%] text-[6px] font-medium',
  );

  const stepSourceLinkStyles = cn(
    'text-text-subtitle block text-[6px] tracking-tight',
  );
  // #endregion

  return (
    <div className={sectionStyles}>
      <p className={eyebrowStyles}>Make more on every mile</p>

      <ul className={stepsListStyles}>
        {steps.map(({ title, img, description, source }) => (
          <li key={title} className={stepItemStyles}>
            <div className={stepContentStyles}>
              <h2 className={stepHeadingStyles}>{title}</h2>

              <p className={stepDescriptionStyles}>{description}</p>

              <a
                href={source}
                className={stepSourceLinkStyles}
                target='_blank'
                rel='noopener noreferrer'
              >
                source
              </a>
            </div>

            <img className={stepImageStyles} src={img} alt='' />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HowItWorks;
