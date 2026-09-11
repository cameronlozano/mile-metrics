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
  const imgStyling = cn('w-20 grayscale-100');

  return (
    <div className='flex -translate-y-5 flex-col items-center justify-center'>
      <p className='pb-5 font-bold tracking-wider text-gray-600/40 uppercase'>
        Built With
      </p>

      <ul className='grid grid-cols-4 place-items-center gap-x-10 gap-y-5'>
        <li>
          <img className={imgStyling} src={react} />
        </li>

        <li>
          <img className={imgStyling} src={tailwind} />
        </li>

        <li>
          <img className={imgStyling} src={vite} />
        </li>

        <li>
          <img className={imgStyling} src={supabase} />
        </li>

        <li>
          <img className={imgStyling} src={reactHookForm} />
        </li>

        <li>
          <img className={imgStyling} src={reactRouter} />
        </li>

        <li>
          <img className={imgStyling} src={reactAria} />
        </li>

        <li>
          <img className={imgStyling} src={tanstack} />
        </li>
      </ul>
    </div>
  );
};

export default BuiltWith;
