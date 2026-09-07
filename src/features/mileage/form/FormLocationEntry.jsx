import MileageLocationFields from './MileageLocationFields';
import FormTiles from './FormTiles';
import { useFormContext } from './FormContext';

const FormLocationEntry = () => {
  const { control, fields, resetField } = useFormContext();

  return (
    // Scrolling container
    <div className='relative mb-3 h-45 snap-y snap-mandatory scrollbar-gutter-stable overflow-y-auto'>
      {fields.map((field, index) => (
        <div key={field.id} className='h-full shrink-0 snap-start'>
          {/* Location counter */}
          <div>
            <p className='pl-3 text-sm font-semibold tracking-tight text-gray-500'>
              {`Location ${index + 1}`}
            </p>
          </div>

          {/* Location selection */}
          <div className='flex justify-evenly pb-6'>
            <MileageLocationFields
              control={control}
              index={index}
              resetField={resetField}
            />
          </div>

          {/* Tiles */}
          <div>
            <FormTiles control={control} index={index} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default FormLocationEntry;
