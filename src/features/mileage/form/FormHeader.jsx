import { BoltIcon } from '@heroicons/react/24/outline';

const FormHeader = () => {
  return (
    <div className='gap-space-2xs flex flex-col'>
      <h1 className='text-text-heading text-md relative mx-auto font-bold tracking-wider'>
        Mileage Tracking Made Faster
        <BoltIcon
          aria-hidden='true'
          className='text-svg-brand absolute top-1/2 -right-2.75 size-2 -translate-y-1'
        />
      </h1>

      <p className='text-text-subtitle text-center text-[10px] font-medium tracking-wide'>
        Add the details for this mileage record.
      </p>
    </div>
  );
};

export default FormHeader;
