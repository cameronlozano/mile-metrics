import react from '../../../assets/logos/react.png';
import reactHookForm from '../../../assets/logos/reactHookForm.png';
import reactRouter from '../../../assets/logos/reactRouter.png';
import supabase from '../../../assets/logos/supabase.png';
import tailwind from '../../../assets/logos/tailwind.png';
import tanstack from '../../../assets/logos/tanstack.png';
import reactAria from '../../../assets/logos/reactAria.png';
import vite from '../../../assets/logos/vite.png';
import cn from '../../../utils/cn';

const BuiltWith = () => {
  const containerStyling = cn(
    'pb-space-xs gap-space-xs flex flex-col items-center justify-center',
  );

  const titleStyling = cn(
    'text-text-faint text-[7px] font-medium tracking-wider uppercase',
  );

  const ulStyling = cn('grid w-full grid-cols-4 place-items-center gap-y-2');

  const imgStyling = cn('size-12 object-contain grayscale-100');

  const logos = [
    react,
    tailwind,
    vite,
    supabase,
    reactHookForm,
    reactRouter,
    reactAria,
    tanstack,
  ];

  return (
    <div className={containerStyling}>
      <p className={titleStyling}>Built With</p>

      <ul className={ulStyling}>
        {logos.map((logo) => (
          <li key={logo}>
            <img className={imgStyling} src={logo} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BuiltWith;
