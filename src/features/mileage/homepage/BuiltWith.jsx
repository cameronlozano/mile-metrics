//  Assets
import react from '../../../assets/logos/react.png';
import reactAria from '../../../assets/logos/reactAria.png';
import reactHookForm from '../../../assets/logos/reactHookForm.png';
import reactRouter from '../../../assets/logos/reactRouter.png';
import supabase from '../../../assets/logos/supabase.png';
import tailwind from '../../../assets/logos/tailwind.png';
import tanstack from '../../../assets/logos/tanstack.png';
import vite from '../../../assets/logos/vite.png';

// Layout primitives
import Center from '../../../ui/layout/Center';
import Cluster from '../../../ui/layout/Cluster';
import Stack from '../../../ui/layout/Stack';

// Utilities
import cn from '../../../utils/cn';

const BuiltWith = () => {
  const headingStyles = cn(
    'text-text-faint text-md font-extralight tracking-wider uppercase',
  );

  const imgStyling = cn('size-30 object-contain grayscale-100');

  const logos = [
    { img: react, alt: 'React' },
    { img: tailwind, alt: 'Tailwind CSS' },
    { img: vite, alt: 'Vite' },
    { img: supabase, alt: 'Supabase' },
    { img: reactHookForm, alt: 'React Hook Form' },
    { img: reactRouter, alt: 'React Router' },
    { img: reactAria, alt: 'React Aria' },
    { img: tanstack, alt: 'TanStack' },
  ];

  return (
    <Stack spacing={'space-y-space-lg'}>
      <Center render='h2' className={headingStyles}>
        Built With
      </Center>

      <Center maxInlineSize='w-[80vw]'>
        <Cluster
          justify='justify-center'
          renderAs='ul'
          gap='gap-x-space-2xl gap-y-space-xl'
        >
          {logos.map(({ img, alt }) => (
            <li key={alt}>
              <img className={imgStyling} src={img} alt={alt} />
            </li>
          ))}
        </Cluster>
      </Center>
    </Stack>
  );
};

export default BuiltWith;
