import driveImg from '../../../assets/drive.png';
import recordImg from '../../../assets/record.png';
import saveImg from '../../../assets/save.png';

import Box from '../../../ui/layout/Box';
import Stack from '../../../ui/layout/Stack';
import Grid from '../../../ui/layout/Grid';
import Frame from '../../../ui/layout/Frame';
import Center from '../../../ui/layout/Center';

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
  const eyebrowStyles = cn(
    'text-text-subtitle mx-auto text-xs font-extralight tracking-widest uppercase',
  );

  // #region Step styles

  const imgStyles = cn('h-full w-full object-cover');

  const headingStyles = cn('text-text-heading text-6xl font-bold');

  const descriptionStyles = cn(
    'text-text-subtitle w-[40ch] text-sm leading-loose font-bold',
  );

  const sourceStyles = cn('text-text-subtitle text-sm tracking-tight');
  // #endregion

  return (
    <Box padding='px-page-offset-sides-xs py-space-sm'>
      {/* Spacing between the eyebrow and the How It Works steps */}
      <Stack spacing='space-y-space-lg'>
        <Center render='p' className={eyebrowStyles}>
          Make more on every mile
        </Center>

        <Box render='ul' padding='px-page-offset-sides-2xs'>
          {/* Spacing between each How It Works step ⬇️ */}
          <Stack render='li' spacing='space-y-space-2xl'>
            {steps.map(({ title, img, description, source }) => (
              // Spacing between the description and the image ⬇️
              <Stack key={title} spacing='space-y-space-md'>
                {/* Spacing between the header, description and source ⬇️ */}
                <Stack spacing='space-y-space-xs' className='text-start'>
                  <h2 className={headingStyles}>{title}</h2>

                  <p className={descriptionStyles}>{description}</p>

                  <a
                    href={source}
                    className={sourceStyles}

                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    source
                  </a>
                </Stack>

                <Frame
                  border='border-2'
                  borderStyles='border-border-faint shadow-md rounded-lg'
                >
                  <img className={imgStyles} src={img} alt='' />
                </Frame>
              </Stack>
            ))}
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default HowItWorks;
